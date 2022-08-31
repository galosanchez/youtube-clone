
const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const cardData = () => {
    return {
      cover: `https://picsum.photos/id/${getRandom(1, 70)}/520/300`,
      avatar: `https://i.pravatar.cc/100?img=${getRandom(1, 70)}`,
      time: `${getRandom(0, 60)}:${getRandom(10, 60)}`,
      views: `${getRandom(1, 900)}.${getRandom(100, 999)}`,
      name: `${getelementArray(channelName)}`,
      title: `${getelementArray(titleVideo)}`,
      date: `hace ${getRandom(2, 12)} meses`
    }
}

const commentData = () => {
    return {
      avatar: `https://i.pravatar.cc/100?img=${getRandom(1, 70)}`,
      date: `hace ${getRandom(2, 6)} días`,
      likes: `${getRandom(1, 900)}`,
      name: `${getelementArray(channelName)}`,
      comment: `${getelementArray(comments)}`
    }
}
const cardSidebarData = () => {
    return {
      cover: `https://picsum.photos/id/${getRandom(1, 70)}/520/300`,
      title: `${getelementArray(titleVideo)}`,
      name: `${getelementArray(channelName)}`,
      views: `${getRandom(1, 900)}.${getRandom(100, 999)}`,
      date: `hace ${getRandom(2, 12)} meses`
    }
}

const channelName = ['Angy Pippin','Martyn Studdal', 'Raphael Frankling', 'Ollie Downton',
                'Ivy Dear', 'Kial Cocke','Gasparo Itzhak','Kay Moatt','Lisbeth Chang',
                'Stanislas Mateus','Austina Boxhall','Fidelio Govey','Jessa Fellona',
                'Faun Glackin','Farrel Sibbet','Pavlov Ruppert','Vince Hebner',
                'Melina Sturge','Lodovico Mulcock','Alanah Perch','Yardley Rockwill'
                ];

const titleVideo = ['Música profunda para el trabajo - Mezcla de enfoque oscuro',
    '7 Mentiras de la programación ¡QUE NO DEBES CREER!','Las NUEVAS TÉCNICAS para APRENDER a PROGRAMAR en el 2021 (RÁPIDO y desde CERO)',
    'Qué lenguaje de programación aprender primero', '¿Una PC Gamer Actual Puede con el 8K? - TV LG QNED mini LED',
    'Creo un PC de 12.000€ para Axozer y es ELEGANCIA PURA', 'NO VUELVO A COMPRAR CAJAS MISTERIOSAS EN MI VIDA ESTOY HARTO',
    'INEXPLICABLE: #35 ¿CUÁNDO LLEGA EL APOCALIPSIS? | EPISODIO COMPLETO','GIGANTES DE LA INGENIERÍA: LA ESTATUA DE LA LIBERTAD | EPISODIO COMPLETO',
    'Perfumes PIRATAS vs ORIGINALES | ¿Conviene pagar más por marcas?','¿Cuál es el mejor HOT DOG de Nueva York? | Perros calientes 🌭',
    'Visité las famosas DINO-QUESADILLAS 🦕🦖 | ¿Vale la pena viajar tan lejos?'];

const comments = ['Eres mi youtuber favorito en estos temas, nadie tan sincero como tú. Mi situación por el momento no es muy buena pero tú me inspiras a emprender y hallar soluciones. Saludos desde Medellín Colombia.',
'Sos al único youtuber que sigo por tu sinceridad y Mostrar las cosas como son y no engañas a la gente. Seguí así bro 😎 exitos',
'No estoy tratando de ser pesimista, pero las acciones suben y bajan todo el tiempo, es por eso que nunca he tenido interés en lo que tenga que ver con el largo plazo, por lo que estaría interesado en saber cómo obtener tanto beneficio como el súper inversores que generan hasta $ 50K en pocos meses sin importar la condición del mercado',
'Excelente tu video!! 👏💪 Consulta. Podrías colocar el comando de Linux en la descripción para utilizarlo?',
'El único Youtuber que esplica todo y te hace entender rápido las cosas ❤️',
'Gracias es un canal sumamente util, siempre me ahorras un montón de tiempo en estudio y desarrollo',
'tambien he intentado minar monero con celular y no es rentable para nada...  PERO.. ¿ has probado usando una Orange PI o un RaspBerry ?',
'Tu sinceridad es LO QUE SE NECESITA EN TODO EL MUNDO',
'Buen video muy interesante desde el principio hasta el final.'];

const getelementArray = (array) => {
    return array[ getRandom( 0, (array.length - 1) ) ];
}

export {cardData};
export {commentData};
export {cardSidebarData};