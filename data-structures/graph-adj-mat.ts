/**
 * 使用邻接矩阵实现图的操作
 * 有向有权图
 */

type Vertex = number

export default class GraphAdjMat {
  private vertices: Vertex[] // 顶点
  private adjMat: number[][] // 临接矩阵
  constructor(
    vertices: Vertex[],
    edges: [number, number, number][],
  ) {
    this.vertices = []
    this.adjMat = []

    // 添加顶点
    for (const value of vertices) {
      this.addVertex(value)
    }

    // 添加变
    edges.forEach((item) => {
      this.addEdge(...item)
    })
  }

  addVertex(v: Vertex): void {
    // 添加一个顶点
    this.vertices.push(v)

    // 新的一行
    const newRow: number[] = Array.from<number>({ length: this.vertices.length }).fill(Infinity)

    // 新的一列
    for (let i = 0; i < this.adjMat.length; i++) {
      this.adjMat[i].push(Infinity)
    }
    // 添加新的一行
    this.adjMat.push(newRow)
  }

  addEdge(i: number, j: number, weight: number) {
    // 边界判断
    if (i < 0 || i >= this.vertices.length || j < 0 || j >= this.vertices.length || i === j) {
      throw new Error('索引越界')
    }
    // 添加一条边
    this.adjMat[i][j] = weight
  }

  size() {
    // 顶点数量
    return this.vertices.length
  }

  // 删除顶点，通过索引删除
  removeVertex(index: number) {
    // 边界判断
    if (index < 0 || index >= this.vertices.length) {
      throw new Error('索引越界')
    }

    this.vertices.splice(index, 1)

    // 删除行
    this.adjMat.splice(index, 1)

    // 删除列
    for (let i = 0; i < this.adjMat.length; i++) {
      this.adjMat[i].splice(index, 1)
    }
  }

  // 删除边
  removeEdge(i: number, j: number) {
    // 边界判断
    if (i < 0 || i >= this.vertices.length || j < 0 || j >= this.vertices.length || i === j) {
      throw new Error('索引越界')
    }
    this.adjMat[i][j] = Infinity
  }
}
