let description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
description += 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
description += 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
description += 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

const regulation = [
  {
    title : 'Da hospedagem de pessoas e crianças',
    description : [
      {
        title : 'O Hostel informa que se reserva ao direito de admissão de qualquer visitante ou hóspede. Em conformidade com a Normativa do Ministério do Turismo (Embratur), no momento do check-in é obrigatório o preenchimento da Ficha Nacional do Registro de Hóspedes (FNRH), bem como a apresentação de documento original válido com foto',
      },
      {
        title : 'Havendo crianças e/ou adolescentes deverá ser apresentado um documento original válido da criança e/ou adolescente e outro que comprove a autoridade do adulto que o acompanha. De acordo com o Estatuto da Criança e do Adolescente (lei 8.069/90 - Art. 82), é proibida a hospedagem de criança ou adolescente no Hostel sem a autorização ou acompanhamento dos pais. O Hostel reserva ao direito de não aceitar a hospedagem de menores de idade em quartos coletivos. A responsabilidade pela guarda das crianças ou adolescentes é dos seus pais e/ou seus tutores devidamente autorizados',
      },
      {
        title : 'O Hostel se reserva ao direito de não aceitar reservas para estadia superior a 20(vinte) dias corridos, excetos em casos previamente negociados com a Gerência',
      },
      {
        title : 'As diárias são contadas a partir do Check-in às 14:00 horas (podendo ser realizado até as 23:00 horas), e o Check-out até às 11:00 horas. A permanência a partir desse horário implicará na cobrança de 50% de uma nova diária até às 21:00 horas. Após este horário será cobrada uma multa de mais 50% do valor total da diária. Caso o hóspede deseje prorrogar este horário ou a data do check-out, deve consultar a recepção e/ou o setor de reservas antecipadamente para consultar a disponibilidade',
      },
      {
        title : 'O café da manhã é cortesia da diária para os hóspedes e estará disponível na cozinha comunitária do Hostel a partir das 07:30 até às 10:00 (diariamente incluindo os domingos e feriados)',
      },
      {
        title : 'Todo e qualquer utensílio utilizado na cozinha comunitária deve ser lavado após o uso',
      },
      {
        title : 'O serviço de arrumação dos quartos é realizado diariamente, sendo a limpeza somente uma vez ao dia. Em caso de solicitação de limpeza extra ou troca de kits, será cobrada uma taxa, conforme tabela na recepção',
      },
      {
        title : 'As despesas com "Serviços" que não estão cobertas pelas diárias (lavanderia, translados, aluguel de bicicletas, aluguel de toalhas, banhos extras, entre outros) deverão ser pagas de forma imediata na recepção',
      },
      {
        title : 'É terminantemente proibido:',
        description : [
          'Fumar nas dependências internas do Hostel, exceto nas áreas externas',
          'Trazer, armazenar e consumir bebidas alcoólicas',
          'Pendurar roupas ou toalhas nas janelas',
          'Circular pelo Hostel em trajes de dormir, sem camisa ou com roupas inadequadas',
          'Portar e/ou utilizar qualquer tipo de objeto ou substância legalmente proibida ou de qualquer tipo de arma',
          'Adentrar animais (domésticos e/ou silvestres) nas dependências do Hostel',
          'Utilizar-se de empregados do Hostel para realização de serviços particulares',
          'Utilizar-se da lavandaria e churrasqueira sem o prévio agendamento',
          'Retirar qualquer produto do café da manhã e/ou utensílio de cozinha que não seja para consumo e utilização exclusiva na área de alimentação',
          'Não é permitido retirar das dependências do Hostel roupa de banho, chaves ou outros objetos',
        ],
      },
      {
        title : 'Pede-se aos hóspedes que, ao saírem do quarto, tranquem a porta e entreguem a chave na recepção. Ao voltar ao Hostel a chave do quarto deverá ser solicitada no balcão da recepção. No caso de perda ou extravio da chave dos quartos, lockers ou do Hostel, será cobrado do hóspede o valor de R$50,00',
      },
      {
        title : 'Devem ser evitados ruídos que perturbem o sossego alheio, como aparelhos portáteis de TV e de música com volume alto ou abertura e fechamento de portas. A partir das 22:00 até as 7:00 horas deve existir silêncio total no Hostel, respeitando assim a lei do silêncio vigente',
      },
      {
        title : 'Todos os ventiladores, luzes e demais equipamentos devem ser desligados quando não estiverem sendo utilizados',
      },
      {
        title : 'Quaisquer despesas ou prejuízos causados pelos hóspedes provenientes de dano aos móveis ou equipamentos e objetos do Hostel, serão cobrados e debitados da conta dos hóspedes',
      },
      {
        title : 'Os materiais emprestados/alugados como secador de cabelos, ferro de passar roupa, conectores em geral entre outros, deverão ser devolvidos após o uso, sob pena de serem cobrados na conta de hospedagem. Caso ocorra a não devolução, será cobrada uma multa de R$100,00',
      },
      {
        title : 'Quando estiver saindo a passeio ou utilizando as áreas comuns do Hostel, o hóspede deverá cuidar bem de seus pertences, tais como, máquinas fotográficas, celulares, mochilas, bolsas, etc.. e nunca deixar tais objetos soltos e sem vigilância. A guarda é de responsabilidade exclusiva do hóspede',
      },
      {
        title : 'Não deixe pertences de higiene pessoal nos banheiros compartilhados, caso contrário, os itens deixados serão descartados',
      },
      {
        title : 'O Horário de funcionamento da recepção do Hostel é 07:00 às 23:30 horas',
      },
    ],
  },
  {
    title : 'Das responsabilidades e direitos',
    description : [
      {
        title : 'Os documentos, dinheiro e objetos de valor deverão ser guardados nos boxes/armários localizados nos quartos com cadeado. O Hostel não se responsabiliza por quaisquer objetos e/ou valores furtados ou extraviados em suas dependências',
      },
      {
        title : 'O Hostel se reserva o direito de não permitir a permanência daqueles hóspedes que atentarem não respeitarem o Regulamento interno e que atentarem contra a moral pública, os bons costumes e o civismo, que se encontrem embriagados ou sob efeito de drogas, que provoquem distúrbios de qualquer ordem, que causem danos aos bens do Hostel ou de outro hóspede e que sejam procurados pela justiça',
      },
      {
        title : 'O hóspede deverá indenizar o Hostel por todos eventuais prejuízos, danos e furtos devidamente identificados e comprovados. Em caso de dúvida, o Hostel poderá utilizar as imagens das câmeras de segurança captadas pelo sistema de segurança do imóvel',
      },
      {
        title : 'DINHEIRO E/OU OBJETOS DE VALOR deixados ou esquecidos nas dependências das acomodações, inclusive nos lockers, são de inteira responsabilidade do hóspede',
      },
    ],
  },
  {
    title : 'Das reservas',
    description : [
      {
        title : 'Todas as reservas do Hostel estão sujeitas à disponibilidade do momento da solicitação. Os bloqueios apenas são mantidos em nosso sistema se forem 100% garantidos/confirmados via alguma forma de pagamento oficial e aceito pelo Hostel',
      },
      {
        title : 'As reservas apenas serão garantidas após devidamente confirmado o adiantamento ao Hostel de equivalente 50% (cinquenta por cento) do valor total das diárias. Caso o valor não seja adiantado, a reserva poderá ser automaticamente cancelada',
      },
      {
        title : 'A alteração de datas da reserva, sempre deverá respeitar a disponibilidade de vagas do Hostel. Não será possível alteração de data para Pacotes de FERIADOS, DATAS FESTIVAS e EVENTOS NA CIDADE',
      },
    ],
  },
  {
    title : 'Da política de cancelamento / desistência',
    description : [
      {
        title : 'Em casos de pedidos de cancelamento e/ou desistências em decorrência de qualquer motivo, deverão ocorrer em até 72 (setenta e duas) horas antes da data do check-in. Neste caso, haverá o reembolso de 50% do valor depositado, descontados 10% de impostos e tarifas bancárias',
      },
      {
        title : 'Em casos de pedidos de cancelamentos com menos de 72 (setenta e duas) horas de antecedência, não haverá qualquer reembolso',
      },
      {
        title : 'A desistência da estadia após a efetivação do check in, na entrada do hostel, assim como a saída antecipada ou desistência parcial das diárias contratadas, INDEPENDENTE DO MOTIVO NÃO DARÁ DIREITO A QUALQUER TIPO DE RESTITUIÇÃO, REEMBOLSO EM DINHEIRO OU CRÉDITO EM NOVAS DIÁRIAS, acarretando também a perda total da quantia paga pelo pacote da hospedagem ou diária',
      },
    ],
  },
  {
    title : 'Não comparecimento',
    description : [
      {
        title : 'O não comparecimento sem comunicação prévia por escrito, será considerado "no-show" (desistência sem cancelamento). Neste caso, a reserva será cancelada (com retenção de 100% do valor pago), disponibilizando a acomodação para outro hóspede interessado. NÃO HAVERÁ RESTITUIÇÃO DO VALOR PAGO PARA RESERVA OU CRÉDITO em novas diárias',
      },
    ],
  },
  {
    title : 'Das visitas',
    description : [
      {
        title : 'Os visitantes dos hóspedes são bem vindos apenas às áreas comuns do Hostel a partir das 11hs até às 23hs. É proibido receber visitas nos quartos do Hostel (sejam dependentes ou convidados). Para receber visitas nos quartos, independente do tempo de permanência ou grau de parentesco, será necessária uma autorização da gerência e o preenchimento de uma ficha cadastral do visitante, juntamente com uma cópia da sua identidade (com foto). As despesas ou prejuízos causados pelo visitante são da responsabilidade do hóspede daquele quarto',
      },
    ],
  },
  {
    title : 'Dos achados e perdidos',
    description : [
      {
        title : 'Todo e qualquer objeto encontrado no Hostel será guardado pelo período máximo de 30 (trinta) dias. Após este período, não havendo quem o procure, será dado ao objeto o destino mais conveniente, a critério do Hostel',
      },
    ],
  },
  {
    title : 'Da utilização da cozinha e lavanderia',
    description : [
      {
        title : 'A cozinha comunitária poderá ser utilizada das 7:00 até 23:00 horas. Todos os alimentos colocados pelo hóspede na geladeira deverão ser devidamente identificados. Os mantimentos não identificados são descartados diariamente. Não é permitido retirar nenhum utensílio para fora da cozinha ou área de refeição',
      },
      {
        title : 'São responsabilidades dos hóspedes a organização e limpeza diária da cozinha. Todos os utensílios utilizados devem ser lavados após o uso. A multa por utensílios utilizados e não lavados é de R$ 50,00. Caso a cozinha de hóspede esteja muito suja poderá ser fechada pelo período de 24 horas independente do que estiver dentro',
      },
    ],
  },
  {
    title : 'Disposições gerais',
    description : [
      {
        title : 'É estritamente proibido o porte ou uso de drogas nas dependências do Hostel',
      },
      {
        title : 'Conservar dormitórios, banheiros e áreas em comum limpas e organizadas',
      },
      {
        title : 'Não jogar papel no vaso sanitário ou no chão',
      },
      {
        title : 'Respeitar os horários e normas de funcionamento dos serviços oferecidos',
      },
      {
        title : 'Reserva-se à Gerência o direito de vetar a hospedagem a quem não convier ao Hostel. Todo aquele que proceder de maneira inadequada, contrária a este regulamento ou transgredir normas legais ou de moral, será convidado a retirar-se do estabelecimento',
      },
      {
        title : 'Para quaisquer informações a respeito da cidade, serviços, passeios, remédios, assistência médica, mecânica e sugestões, pede-se aos hóspedes que dirijam-se à recepção. Ficaremos satisfeitos em ajudá-los',
      },
    ],
  },
];

const navbar = [
  {
      title : 'No hostel',
      path : '#',
  },
  {
      title : 'nos quartos',
      path : '#',
  },
  {
      title : 'nos arredores',
      path : '#',
  },
  {
      title : 'Condições',
      path : '#',
  },
  {
      title : 'Destaques',
      path : '#',
  },
  {
      title : 'Perguntas frequentes',
      path : '#',
  },
  {
      title : 'Contato',
      path : '#',
  },
  {
      title : 'Localização',
      path : '#',
  },
];

const address = [
  {
    cep : '05109200',
    number : '18',
  },
  {
    cep : '05109200',
    number : '18',
  },
  {
    cep : '05109200',
    number : '18',
  },
];

const contacts = [
  {
    address : [
    ],
    attendance : [
      {
        alltime : false,
        weekday : 'domingo',
        starttime : '18:00',
        endtime : '23:00',
        open : true,
      },
      {
        alltime : false,
        weekday : 'segunda-feira',
        starttime : '18:00',
        endtime : '23:00',
        open : true,
      },
      {
        alltime : false,
        weekday : 'terça-feira',
        starttime : '18:00',
        endtime : '23:00',
        open : false,
      },
      {
        alltime : false,
        weekday : 'quarta-feira',
        starttime : '18:00',
        endtime : '23:00',
        open : true,
      },
      {
        alltime : false,
        weekday : 'quinta-feira',
        starttime : '18:00',
        endtime : '23:00',
        open : false,
      },
      {
        alltime : false,
        weekday : 'sexta-feira',
        starttime : '18:00',
        endtime : '23:00',
        open : true,
      },
      {
        alltime : false,
        weekday : 'sábado',
        starttime : '18:00',
        endtime : '23:00',
        open : true,
      },
    ],
    business : {
      department : 'bessa cafeteria',
      description : description,
      image : '',
    },
    contact : {
      email : 'cafeteria@bessahostel.com.br',
      phone : {
        number : '11940058153',
        type : 'phone',
      },
    },
  },
  {
    address : [
    ],
    attendance : [
      {
        alltime : true,
        weekday : 'domingo',
        starttime : '07:00',
        endtime : '23:00',
        open : true,
      },
      {
        alltime : false,
        weekday : 'segunda-feira',
        starttime : '07:00',
        endtime : '23:00',
        open : true,
      },
      {
        alltime : false,
        weekday : 'terça-feira',
        starttime : '07:00',
        endtime : '23:00',
        open : false,
      },
      {
        alltime : false,
        weekday : 'quarta-feira',
        starttime : '07:00',
        endtime : '23:00',
        open : true,
      },
      {
        alltime : false,
        weekday : 'quinta-feira',
        starttime : '07:00',
        endtime : '23:00',
        open : false,
      },
      {
        alltime : false,
        weekday : 'sexta-feira',
        starttime : '07:00',
        endtime : '23:00',
        open : true,
      },
      {
        alltime : true,
        weekday : 'sábado',
        starttime : '07:00',
        endtime : '23:00',
        open : true,
      },
    ],
    business : {
      department : 'bessa hostel',
      description : description,
      image : '',
    },
    contact : {
      email : 'recepcao@bessahostel.com.br',
      phone : {
        number : '11940058153',
        type : 'whatsapp',
      },
    },
  },
  {
    address : [
    ],
    attendance : [
      {
        alltime : true,
        weekday : 'domingo',
        starttime : '07:00',
        endtime : '15:00',
        open : true,
      },
      {
        alltime : false,
        weekday : 'segunda-feira',
        starttime : '07:00',
        endtime : '15:00',
        open : true,
      },
      {
        alltime : false,
        weekday : 'terça-feira',
        starttime : '07:00',
        endtime : '15:00',
        open : false,
      },
      {
        alltime : false,
        weekday : 'quarta-feira',
        starttime : '07:00',
        endtime : '15:00',
        open : true,
      },
      {
        alltime : false,
        weekday : 'quinta-feira',
        starttime : '07:00',
        endtime : '15:00',
        open : false,
      },
      {
        alltime : false,
        weekday : 'sexta-feira',
        starttime : '07:00',
        endtime : '15:00',
        open : true,
      },
      {
        alltime : true,
        weekday : 'sábado',
        starttime : '07:00',
        endtime : '15:00',
        open : true,
      },
    ],
    business : {
      department : 'bessa lavanderia',
      description : description,
      image : '',
    },
    contact : {
      email : 'lavanderia@bessahostel.com.br',
      phone : {
        number : '11940058153',
        type : 'whatsapp',
      },
    },
  },
];

const service = [], slideshow = [];
for (let i = 0; i < contacts['length']; i++) {
  let object = {
    title : contacts[i]['business']['department'],
    description : contacts[i]['business']['description'],
    image : contacts[i]['business']['image'] ? contacts[i]['business']['image'] : '/images/img-' + i + '.jpg',
  };
  service.push(object);
  slideshow.push(object);
};

module.exports = {
    description : description,
    service : service,
    slideshow : slideshow,
    navbar : navbar,
    regulation : regulation,
    contacts : contacts,
    address : address,
};