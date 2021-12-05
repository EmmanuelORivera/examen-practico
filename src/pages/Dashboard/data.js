const initialState = {
  deliveries: [
    {
      id: "3cdef0e2",
      user: "Emmanuel Ochoa",
      date: "2 Dic 2021",
      driver: "John Doe",
      shipper: "Liverpool",
      status: { text: "Entregado", code: "delivered" },
      serviceInfo: {
        estimatedArrival: "3 horas",
        serviceStartedHour: "10:14 AM",
        serviceFinishedHour: "1:14PM",
        observations: "El paquete ha sido entregado con exito",
      },
    },
    {
      id: "68c93f29",
      user: "Luis Ochoa",
      date: "2 Dic 2021",
      driver: "Jane Doe",
      shipper: "Sigma",
      status: { text: "Cancelado", code: "canceled" },
      serviceInfo: {
        estimatedArrival: "1 hora",
        serviceStartedHour: "10:14 AM",
        serviceFinishedHour: "10:15 AM",
        observations: "El envio ha sido cancelado por el usuario",
      },
    },
    {
      id: "711b324d",
      user: "Pablo Ochoa",
      date: "2 Dic 2021",
      driver: "Bill Doe",
      shipper: "dportenis",
      status: { text: "En Progreso", code: "inProgress" },
      serviceInfo: {
        estimatedArrival: "2 horas",
        serviceStartedHour: "10:14 AM",
        serviceFinishedHour: "No ha finalizado",
        observations: "Sin observaciones",
      },
    },
  ],
  activeLink: null,
};

export default initialState;
