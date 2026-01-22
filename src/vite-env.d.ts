/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_GOOGLE_SCRIPT_URL: any
    readonly VITE_VITE_GOOGLE_SCRIPT_URL: string
    readonly VITE_GOOGLE_SHEET_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
