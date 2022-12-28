const {obtenerEstadoTarea} = require('./index.js')

describe('ejemplos proporcionados', () => {
  test('Solicitado, Solicitado, Solicitado -> Solicitado', () => {
    const input = "Solicitado,Solicitado,Solicitado"
    expect(obtenerEstadoTarea(input)).toBe("Solicitado")
  })
  test('Activado, Activado, Cancelado -> Activado', () => {
    const input = "Activado,Activado,Cancelado"
    expect(obtenerEstadoTarea(input)).toBe("Activado")
  })
  test('Solicitado, Tramitado, Cancelado -> Tramitado', () => {
    const input = "Solicitado,Tramitado,Cancelado"
    expect(obtenerEstadoTarea(input)).toBe("Tramitado")
  })
  test('Tramitado, Falta info, Tramitado -> Falta info', () => {
    const input = "Tramitado,Falta info,Tramitado"
    expect(obtenerEstadoTarea(input)).toBe("Falta info")
  })
})