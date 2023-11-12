export default async () => {
  const widgetJsonModules: any = import.meta.glob('./*/index.json')
  const widgetJson: any = []
  for (const path in widgetJsonModules) {
    const widgetJsonModule = await widgetJsonModules[path]()
    widgetJson.push(widgetJsonModule.default)
  }
  return widgetJson
}