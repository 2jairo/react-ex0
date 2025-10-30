import { useState, useEffect } from "react"
import './ConversorMoneda.css'

const DIVISAS_EURO = {
    Dollar: 1.16,
    Yuan: 8.23,
    Euro: 1,
    'Sol Peruano': 3.93,
    'Libras (GBP)': 0.88,
    'Peso Colombiano': 4492.80,
    'Dolar Canadiense (CAD)': 1.62,
    'Yen (JPY)': 178.23,
}


export const ConversorDivisas = () => {
    const [divisaActual, setDivisaActual] = useState('Euro')
    const [cantidadActual, setCantidadActual] = useState(DIVISAS_EURO.Euro)
    const [divisaNueva, setDivisaNueva] = useState('Dollar')
    const [cantidadNueva, setCantidadNueva] = useState(DIVISAS_EURO.Dollar)

    useEffect(() => {
        const cantidadActualEnEuro = cantidadActual / DIVISAS_EURO[divisaActual]
        const cantidadNuev = cantidadActualEnEuro * DIVISAS_EURO[divisaNueva]
        setCantidadNueva(cantidadNuev)

    }, [divisaActual, divisaNueva, cantidadActual, cantidadNueva])

    const updateCantidadActual = (e) => {
        const value = parseFloat(e.currentTarget.value)
        setCantidadActual(isNaN(value) ? 0 : value)
    }
    const updateCantidadNueva = (e) => {
        const value = parseFloat(e.currentTarget.value)
        setCantidadNueva(isNaN(value) ? 0 : value)
    }

    return (
        <main>
            <div className="divisa">
                <input value={cantidadActual} type="number" onInput={updateCantidadActual} />

                <select value={divisaActual} onInput={(e) => setDivisaActual(e.currentTarget.value)}>
                    {Object.keys(DIVISAS_EURO).map((d) => {
                        return (
                            <option key={d} value={d}>{d}</option>
                        )
                    })}
                </select>
            </div>

            <div className="divisa">
                <input value={cantidadNueva} type="number" onInput={updateCantidadNueva} />

                <select value={divisaNueva} onInput={(e) => setDivisaNueva(e.currentTarget.value)}>
                    {Object.keys(DIVISAS_EURO).map((d) => {
                        return (
                            <option key={d} value={d}>{d}</option>
                        )
                    })}
                </select>
            </div>
        </main>
    )
}