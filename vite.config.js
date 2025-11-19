import { defineConfig } from 'vite'

export default defineConfig({
    // If you are deploying to https://<USERNAME>.github.io/<REPO>/
    // set base to '/<REPO>/'.
    // If you are deploying to https://<USERNAME>.github.io/
    // set base to '/'.
    // We'll use './' for relative paths which often works for simple static sites,
    // or you can change this after creating the repo.
    base: './',
})
