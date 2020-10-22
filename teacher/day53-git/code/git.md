- git init:初始化一个仓库，就会在当前文件中生成一个 .git的文件夹，这个文件夹就是你的仓库内容
  - 不能在仓库中去新初始化一个仓库
- git add
  - git add filename:提交工作区某一个文件 到暂存区
  - git add ./*/-A：提交所有的工作区的改动 到暂存区
- git commit -m '注释信息'：
  - 把暂存区的内存 全部提交到版本区
- git status：
  - 查看工作区或暂存区是否存在未提交的内容
  - 红色：工作区有内容被修改
  - 绿色：暂存区有内容未提交到版本区
- 注释提交规范
  - chore: 项目初始化 
  - feat/Added: 增加新功能
  - fix/Fixed: 改bug
  - style: 样式修改
  - test: 部署测试环境
  - docs：文档（documentation）
- git restore ./filename：撤销工作区的改动，还原最后一次提交的状态（新增文件无法撤销，直接删除即可）
- git restore --staged ./filename  撤销暂存区的改变  但是工作区还是改变的状态

- git diff  查看工作区改动的内容(git diff不能检测出新增文件)
- git diff --cached 查看暂存区和仓库区当前版本的对比



- git log  查看仓库区所有的版本，按照时间列出所有的更新
- git log --oneline 一行查看所有的版本
- git reset --hard XXXXXXX  回退到某个版本
- git reflog ：查看所有的操作（无论是版本更新 还是版本回退）
- git reset --hard HEAD^ 回退上一个版本