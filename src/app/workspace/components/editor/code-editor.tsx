"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { loader } from "@monaco-editor/react";
import type * as monaco from "monaco-editor";
import { CodeEditorInterface } from "./interfaces/code-editor-interface";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

loader.config({
  paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.49.0/min/vs" },
});

export default function CodeEditor({ language }: CodeEditorInterface) {
  const [monacoInstance, setMonacoInstance] = useState<typeof monaco | null>(
    null
  );

  useEffect(() => {
    loader.init().then(setMonacoInstance);
  }, []);

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
    />
  );
}

const loadedLanguageCache = new Map<string, any>();

async function loadLanguage(
  monaco: typeof import("monaco-editor"),
  language: string
) {
  let module;

  if (loadedLanguageCache.has(language)) {
    module = loadedLanguageCache.get(language);
  } else {
    const base =
      "https://cdn.jsdelivr.net/npm/monaco-editor@0.49.0/esm/vs/basic-languages";
    const url = `${base}/${language}/${language}.js`;
    console.log(url);
    module = await import(/* @vite-ignore */ url);
    // loadedLanguageCache.set(language, module);
  }

  monaco.languages.register({ id: language });
  monaco.languages.setMonarchTokensProvider(language, module.language);
}
