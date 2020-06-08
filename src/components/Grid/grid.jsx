import styled from 'styled-components'

export const Grid = styled.div`
	display: grid;
	${({ columns }) =>
    columns
      ? `grid-template-columns: repeat(${columns}, 1fr);`
      : 'grid-template-columns: repeat(12, 1fr);'}
	grid-column-gap: 1em;
	grid-row-gap: ${({ rowGap }) => rowGap || '1em'};
	${({ fullWidth }) => fullWidth && 'width: 100%'};
	${({ p }) => 'padding:' + p};
	${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent};` : ''}
	${({ alignContent }) => (alignContent ? `align-content: ${alignContent};` : '')}
	${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : '')}

	@media (max-width: 1024px) {
		${({ columnsBigTablet }) =>
      columnsBigTablet
        ? `grid-template-columns: repeat(${columnsBigTablet}, 1fr);`
        : 'grid-template-columns: repeat(12, 1fr);'}
	}

	@media (max-width: 768px) {
		${({ columnsTablet }) =>
      columnsTablet
        ? `grid-template-columns: repeat(${columnsTablet}, 1fr);`
        : 'grid-template-columns: repeat(12, 1fr);'}
	}

	@media (max-width: 480px) {
		${({ columnsPhone }) =>
      columnsPhone
        ? `grid-template-columns: repeat(${columnsPhone}, 1fr);`
        : 'grid-template-columns: repeat(12, 1fr);'}
	}

	@media (max-width: 320px) {
		${({ columnsSmallPhone }) =>
      columnsSmallPhone
        ? `grid-template-columns: repeat(${columnsSmallPhone}, 1fr);`
        : 'grid-template-columns: repeat(12, 1fr);'}
	}
`

export const Col = styled.div`
	grid-column: ${({ size }) => (size ? 'span ' + size : 'auto')};
	${({ flex }) => (flex ? 'display: flex;' : '')}
	${({ flexWrap }) => (flexWrap ? `flex-wrap: ${flexWrap};` : '')}
	${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent};` : ''}
	${({ alignContent }) => (alignContent ? `align-content: ${alignContent};` : '')}
	${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : '')}
	${({ mb }) => (mb ? `margin-bottom: ${mb};` : '')}
	${({ p }) => (p ? `padding: ${p};` : '')}
	${({ flexDirection }) =>
    flexDirection ? `flex-direction: ${flexDirection};` : ''}
	${({ alignSelf }) => (alignSelf ? `align-self: ${alignSelf};` : '')}
	${({ m }) => (m ? `margin: ${m};` : '')}
	${({ start }) => (start ? `grid-column-start: ${start};` : '')}
	${({ end }) => (end ? `grid-column-end: ${end};` : '')}

	@media (max-width: 1024px) {
		${({ sizeBigTablet }) =>
      sizeBigTablet ? 'grid-column: span ' + sizeBigTablet : ''};
		${({ pBigTablet }) => pBigTablet && `padding: ${pBigTablet};`}
		${({ flexDirectionBigTablet }) =>
      flexDirectionBigTablet
        ? `flex-direction: ${flexDirectionBigTablet};`
        : ''}
		${({ alignItemsBigTablet }) =>
      alignItemsBigTablet ? `align-items: ${alignItemsBigTablet};` : ''}
		${({ startBigTablet }) =>
      startBigTablet ? `grid-column-start: ${startBigTablet};` : ''}
		${({ endBigTablet }) =>
      endBigTablet ? `grid-column-end: ${endBigTablet};` : ''}
	}

	@media (max-width: 768px) {
		${({ pTablet }) => pTablet && `padding: ${pTablet};`}
		${({ sizeTablet }) => (sizeTablet ? 'grid-column: span ' + sizeTablet : '')};
		${({ flexDirectionTablet }) =>
      flexDirectionTablet ? `flex-direction: ${flexDirectionTablet};` : ''}
		${({ alignItemsTablet }) =>
      alignItemsTablet ? `align-items: ${alignItemsTablet};` : ''}
		${({ startTablet }) =>
      startTablet ? `grid-column-start: ${startTablet};` : ''}
		${({ endTablet }) => (endTablet ? `grid-column-end: ${endTablet};` : '')}
	}

	@media (max-width: 480px) {
		${({ pPhone }) => pPhone && `padding: ${pPhone};`}
		${({ sizePhone }) => (sizePhone ? 'grid-column: span ' + sizePhone : '')};
		${({ flexDirectionPhone }) =>
      flexDirectionPhone ? `flex-direction: ${flexDirectionPhone};` : ''}
		${({ alignItemsPhone }) =>
      alignItemsPhone ? `align-items: ${alignItemsPhone};` : ''}
		${({ startPhone }) => (startPhone ? `grid-column-start: ${startPhone};` : '')}
		${({ endPhone }) => (endPhone ? `grid-column-end: ${endPhone};` : '')}
	}

	@media (max-width: 320px) {
		${({ pSmallPhone }) => pSmallPhone && `padding: ${pSmallPhone};`}
		${({ sizeSmallPhone }) =>
      sizeSmallPhone ? 'grid-column: span ' + sizeSmallPhone : ''};
		${({ flexDirectionSmallPhone }) =>
      flexDirectionSmallPhone
        ? `flex-direction: ${flexDirectionSmallPhone};`
        : ''}
		${({ alignItemsSmallPhone }) =>
      alignItemsSmallPhone ? `align-items: ${alignItemsSmallPhone};` : ''}
		${({ startSmallPhone }) =>
      startSmallPhone ? `grid-column-start: ${startSmallPhone};` : ''}
		${({ endSmallPhone }) =>
      endSmallPhone ? `grid-column-end: ${endSmallPhone};` : ''}
	}
`
