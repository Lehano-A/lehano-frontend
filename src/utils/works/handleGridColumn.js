// обработать колонку грида
function handleGridColumn(cardClone, style) {
  const { gridColumn } = style

  if (gridColumn) {
    const gridItemNode = cardClone.querySelector('.works__grid-item') // color


    if (gridColumn === '1') {
      gridItemNode.classList.add('start-column_1')
    } else

      if (gridColumn === '2') {
        gridItemNode.classList.add('start-column_2')
      } else

        if (gridColumn === '3') {
          gridItemNode.classList.add('start-column_3')
        } else

          if (gridColumn === '1/ span 2') {
            gridItemNode.classList.add('start-column_1-with-span_2')
          } else

            if (gridColumn === '1/ span 3') {
              gridItemNode.classList.add('start-column_1-with-span_3')
            } else

              if (gridColumn === '2/ span 2') {
                gridItemNode.classList.add('start-column_2-with-span_2')
              }
  }
}


export default handleGridColumn