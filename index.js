const checkEveryEqual = (subtareas) => {
  return subtareas.every(subtarea => subtarea === subtareas[0])
}

const checkFaltaInfo = (subtareas) => {
  return subtareas.some(subtarea => subtarea === 'Falta info')
}

const checkTramitado = (subtareas) => {
  return subtareas.some(subtarea => subtarea === 'Tramitado')
}

const checkActivado = (subtareas) => {
  return subtareas.every(subtarea => subtarea === 'Activado' || 'Cancelado')
}

const obtenerEstadoTarea = (estadosSubtareas) => {
  const subtareas = estadosSubtareas.split(',')
  

  const isEveryEqual = checkEveryEqual(subtareas)
  if (isEveryEqual) return subtareas[0]

  const isFaltaInfo = checkFaltaInfo(subtareas)
  if(isFaltaInfo) return 'Falta info'
  
  const isTramitado = checkTramitado(subtareas)
  if(isTramitado) return 'Tramitado'

  const isActivado = checkActivado
  if (isActivado) return 'Activado'
  
  return 'Solicitado'
}

module.exports = {obtenerEstadoTarea}