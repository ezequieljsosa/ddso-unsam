// Mermaid con más contraste y líneas más gruesas para proyectores de bajo brillo
export default () => ({
  theme: 'dark',
  themeVariables: {
    fontSize: '18px',
    lineColor: '#e2e8f0',
    edgeLabelBackground: '#0b1020',
    clusterBkg: '#ffffff0a',
    clusterBorder: '#94a3b8',
    actorBkg: '#1e293b',
    actorBorder: '#e2e8f0',
    actorTextColor: '#ffffff',
    actorLineColor: '#94a3b8',
    signalColor: '#e2e8f0',
    signalTextColor: '#ffffff',
  },
  themeCSS: `
    .flowchart-link { stroke-width: 2.5px; }
    .edgeLabel, .edgeLabel p { color: #ffffff; }
    .messageLine0, .messageLine1 { stroke-width: 2.5px; }
    .messageText { font-weight: 600; }
  `,
})
