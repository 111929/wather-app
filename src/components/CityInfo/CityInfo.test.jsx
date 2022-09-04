import React from 'react'

import {render} from '@testing-library/react'
import CityInfo from './CityInfo' // Sut : Subject under testing 
import { ExpansionPanelActions } from '@material-ui/core'

test("CityInfo render", async () => {
    // AAA
    // Arrange 
    // Act
    // Assert
    // rendrizamos el componente y retorna una serie de funciones de utilidad
    const cityName= "Cordoba"
    const country= "Argentina"

    const  { findAllByRole } = render(<CityInfo city={cityName} country={country} />)
   // findAllByRole nos busca en este caso todos los componentes que sean "heading"
   // el resultado  es un array de componentes.
   const cityAndCountryComponents = await findAllByRole("heading")
   // vamos a comprobar el test
   expect(cityAndCountryComponents[0]).toHaveTextContent(cityName)
   expect(cityAndCountryComponents[1]).toHaveTextContent(country)

})