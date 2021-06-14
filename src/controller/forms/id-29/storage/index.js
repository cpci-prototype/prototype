const schemaForm = [
    {
        title: 'Identificacion del instrumento',
        inputs: [
            {
                id: 'tipo-de-instrumento',
                label: 'Tipo de instrumento',
                type: 'text',
            },
            {
                id: 'nombre-emisor',
                label: 'Nombre del Emisor',
                type: 'text',
            },
            {
                id: 'rut',
                label: 'Rut',
                type: 'text',
            },
            {
                id: 'serie-instrumento',
                label: 'Serie Instrumento',
                type: 'text',
            },
            {
                id: 'pais-domicilio',
                label: 'Pais Domicilio',
                type: 'text',
            },
            {
                id: 'fecha-emision',
                label: 'Fecha Emision',
                type: 'text',
            },
            {
                id: 'moneda-denominacion',
                label: 'Moneda Denominacion',
                type: 'text',
            },
            {
                id: 'tasa-impuesto',
                label: 'Tasa Impuesto',
                type: 'text',
            },
        ],
    },
    {
        title: 'Caracteristicas de Instrumento de renta Fija - 1',
        inputs: [
            {
                id: 'numero-de-cupones',
                label: 'Numero de Cupones',
                type: 'numeric',
            },
            {
                id: 'periodo-pago-cupones',
                label: 'Periodo de Pago de Cupones',
                type: 'text',
            },
            {
                id: 'tasa-emision',
                label: 'Tasa de Emision',
                type: 'numeric',
            },
            {
                id: 'base-anual',
                label: 'Base Anual Considerada',
                type: 'numeric',
            },
            {
                id: 'plazo-anos',
                label: 'Plazo Años',
                type: 'numeric',
            },
            {
                id: 'unidad-reajuste',
                label: 'Unidad de Reajuste',
                type: 'text',
            },
            {
                id: 'numero-amortizaciones',
                label: 'Numero de Amortizaciones',
                type: 'numeric',
            },
        ],
    },
    {
        title: 'Caracteristicas de Instrumento de renta Fija - 2',
        inputs: [
            {
                id: 'fecha-vencimiento',
                label: 'Fecha de Vencimiento',
                type: 'date',
            },
            {
                id: 'clasificacion-riesgo',
                label: 'Clasificacion de Riesgo',
                type: 'text',
            },
            {
                id: 'clasificacion-riesgo-SP',
                label: 'Clasificacion de Riesgo S&P',
                type: 'text',
            },
            {
                id: 'clasificacion-riesgo-moodys',
                label: 'Clasificacion de Moody"s',
                type: 'text',
            },
            {
                id: 'clasificacion-riesgo-fitch',
                label: 'Clasificacion de Fitch',
                type: 'text',
            },
            {
                id: 'clasificacion-riesgo-dbrs',
                label: 'Clasificacion de Dbrs',
                type: 'text',
            },
            {
                id: 'monto-emision',
                label: 'Monto Emision',
                type: 'numeric',
            },
            {
                id: 'moneda-monto-emision',
                label: 'Moneda Monto Emisión',
                type: 'text',
            },
        ],
    },
    {
        title: 'Características de la Transacción',
        inputs: [
            {
                id: 'nombre-intermediario',
                label: 'Nombre del Intermediario',
                type: 'text',
            },
            {
                id: 'bolsa-valores-transaccion',
                label: 'Bolsa de Valores de Transacción',
                type: 'text',
            },
            {
                id: 'fecha-transaccion',
                label: 'Fecha de Transacción',
                type: 'date',
            },
            {
                id: 'fecha-perfeccionamiento',
                label: 'Fecha de Perfeccionamiento',
                type: 'date',
            },
            {
                id: 'unidades',
                label: 'Unidades',
                type: 'numeric',
            },
            {
                id: 'monto-pagado-moneda-denominacion',
                label: 'Monto Pagado moneda de Denominación',
                type: 'numeric',
            },
            {
                id: 'tir-nacional',
                label: 'Tir Nacional',
                type: 'numeric',
            },
            {
                id: 'porcentaje-valor-par-nacional',
                label: 'Porcentaje del Valor Par nacional',
                type: 'numeric',
            },
            {
                id: 'porcentaje-valor-par-extranjero',
                label: 'Porcentaje del Valor Par Extranjero',
                type: 'numeric',
            },
            {
                id: 'tir-extranjera',
                label: 'Tir Extranjera',
                type: 'numeric',
            },
        ],
    },
]

module.exports = {
    schemaForm,
}
