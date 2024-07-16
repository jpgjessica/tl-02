import { resolve } from 'path'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, "dist");

export default {
    root: root,
    build: {
        outDir: outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                _products: resolve(root, '../src/assets/pages/_products.html'),
                _apropos: resolve(root, '../src/assets/pages/_apropos.html'),
                _contact: resolve(root, '../src/assets/pages/_contact.html')
            }
        }
    },
    server: {
        port: 8080
    }
}