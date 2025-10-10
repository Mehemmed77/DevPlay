"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { loader } from "@monaco-editor/react";
import type * as monaco from "monaco-editor";
import { CodeEditorInterface } from "./interfaces/code-editor-interface";

// Dynamic import of Monaco editor (SSR disabled)
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

// Configure Monaco loader to use CDN
loader.config({
  paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.49.0/min/vs" },
});

// Cache loaded languages to avoid repeated loads
const loadedLanguageCache = new Map<string, boolean>();

export default function CodeEditor({ language }: CodeEditorInterface) {
  const [monacoInstance, setMonacoInstance] = useState<typeof monaco | null>(
    null
  );
  const editorRef = useRef<any>(null);

  // Initialize Monaco loader
  useEffect(() => {
    loader.init().then(setMonacoInstance);
  }, []);

  // Load selected language dynamically
  useEffect(() => {
    if (!monacoInstance) return;
    loadLanguage(monacoInstance, language);
  }, [language, monacoInstance]);

  return (
    <MonacoEditor
      height="400px"
      defaultLanguage={language}
      defaultValue={`// ${language} code`}
      theme="vs-dark"
      options={{
        minimap: { enabled: false },
        automaticLayout: true,
        fontSize: 14,
      }}
      onMount={(editor) => (editorRef.current = editor)}
    />
  );
}

/**
 * Dynamically load Monaco language via AMD loader
 */
async function loadLanguage(monaco: typeof import("monaco-editor"), language: string) {
  if (loadedLanguageCache.has(language)) return;

  try {
    // Load the language using Monaco's AMD loader
    await new Promise<void>((resolve, reject) => {
      (window as any).require.config({
        paths: {
          vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.49.0/min/vs",
        },
      });
      (window as any).require([
        `vs/basic-languages/${language}/${language}`,
      ], (mod: any) => {
        monaco.languages.register({ id: language });
        monaco.languages.setMonarchTokensProvider(language, mod.language);
        loadedLanguageCache.set(language, true);
        resolve();
      }, reject);
    });
  } catch (err) {
    console.warn(`Could not load language "${language}":`, err);
  }
}
