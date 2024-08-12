import jsonData from '../public/pdfs/extract2024-08-02T14-45-26/structuredData.json'

function App() {
  const elements = jsonData.elements

  return (
    <>
      {elements.map((element: any, index: number) => {
        if (!element.Path.includes('Table') && !element.Path.includes('Figure')) {
          return (
            <p
              key={index}
              style={{
                fontFamily: element.Font?.family_name,
                fontWeight: element.Font?.weight,
                textAlign: element.attributes?.TextAlign,
                lineHeight: element.attributes?.LineHeight + 'px',
              }}
            >
              {element.Text}
            </p>
          )
        }
        if (element.Path.endsWith('Table')) {
          return (
            <img
              key={index}
              src={'/pdfs/extract2024-08-02T14-45-26/' + element.filePaths[1]}
              alt={'Table'}
              style={{ width: '100%' }}
            />
          )
        }
        if (element.Path.endsWith('Figure') && !element.Path.includes('Table') && element.filePaths) {
          return (
            <img
              key={index}
              src={'/pdfs/extract2024-08-02T14-45-26/' + element.filePaths[0]}
              alt={'Figure'}
              style={{ width: '100%' }}
            />
          )
        }
      })}
    </>
  )
}

export default App
