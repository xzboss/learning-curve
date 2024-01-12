import MarkdownIt from './node_modules/markdown-it/dist'
const md = new MarkdownIt()
const markdownText = `#### tianwen项目部署到test
正常发布提交，不需要打包
1. 在gitlab合并到testing
2. jumpserver中sudo deployer build tianwen-1-test site repeat/sing-for-love
3. sudo deployer deploy tianwen-1-test
4. ok`
const html = md.render(markdownText)
document.querySelector('.app').innerHTML = html
