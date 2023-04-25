const products = [
    {
        Restaurante: 'Chilis',
        Categoria: 'Bebidas',
        Nombre: 'Gaseosa 1.5L',
        img: 'Basedatos/Restaurantes/Chilis/Bebidas/gaseosa-1.5l.png',
        Descripcion: 'Gaseosa 1.5L Cocacola y postobon',
        Precio: 4900,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 35,
        Valoracion: 5

    },

    {
        Restaurante: 'Chilis',
        Categoria: 'Bebidas',
        Nombre: 'Gaseosa personal 330 ml',
        img: 'Basedatos/Restaurantes/Chilis/Bebidas/gaseosa-personal.jpg',
        Descripcion: 'Gaseosa personal contenido 330 ml',
        Precio: 2900,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 35,
        Valoracion: 5

    },
    {
        Restaurante: 'Chilis',
        Categoria: 'Bebidas',
        Nombre: 'Jugo natural',
        img: 'Basedatos/Restaurantes/Chilis/Bebidas/Jugo-fresa.jpg',
        Descripcion: 'Jugo natural de fresa, mango, limonada, lulo y mandarina',
        Precio: 3900,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 35,
        Valoracion: 5

    },
    {
        Restaurante: 'Chilis',
        Categoria: 'Carnes',
        Nombre: 'Churrasco ',
        img: 'Basedatos/Restaurantes/Chilis/Carnes/churrasco.jpg',
        Descripcion: 'Delicioso corte de res 300g a la plancha con ensalada y papas fritas',
        Precio: 18900,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 35,
        Valoracion: 4.8

    },
    {
        Restaurante: 'Chilis',
        Categoria: 'Carnes',
        Nombre: 'Lomo en salsa ',
        img: 'Basedatos/Restaurantes/Chilis/Carnes/lomo-salsa.jpg',
        Descripcion: 'Lomo de cerdo en salsa de la casa con papa al vapor',
        Precio: 17900,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 45,
        Valoracion: 4.4

    },
    {
        Restaurante: 'Chilis',
        Categoria: 'Carnes',
        Nombre: 'Pechuga gratinada ',
        img: 'Basedatos/Restaurantes/Chilis/Carnes/pechuga-gratinada.png',
        Descripcion: 'Pechuga 250g gratinada con maiz y hierbas junto con papas fritas',
        Precio: 17900,
        Combo: false,
        Descuento: 10,
        TiempoEntrega: 45,
        Valoracion: 4.7

    },
    {
        Restaurante: 'Chilis',
        Categoria: 'Hamburguesas',
        Nombre: 'Hamburguesa criolla ',
        img: 'Basedatos/Restaurantes/Chilis/Hambuguersas/hamb-criolla.jpg',
        Descripcion: 'Carne de 150g vegetales, maizitos, tocineta y huevo frito',
        Precio: 21900,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 40,
        Valoracion: 4.9

    },
    {
        Restaurante: 'Chilis',
        Categoria: 'Hamburguesas',
        Nombre: 'hamburguesa especial + cerveza + papas ',
        img: 'Basedatos/Restaurantes/Chilis/Hambuguersas/hamb-doblecombo.jpg',
        Descripcion: 'Doble carne de res 100g, tocineta, aros de cebolla, queso cheddar y vegetales, acompañado con papas fritas y cerveza 330 ml al gusto',
        Precio: 26900,
        Combo: true,
        Descuento: 10,
        TiempoEntrega: 50,
        Valoracion: 4.6

    },
    {
        Restaurante: 'Chilis',
        Categoria: 'Hamburguesas',
        Nombre: 'hamburguesa especial + cerveza + papas ',
        img: 'Basedatos/Restaurantes/Chilis/Hambuguersas/hamb-doblecombo.jpg',
        Descripcion: 'Doble carne de res 100g, tocineta, aros de cebolla, queso cheddar y vegetales, acompañado con papas fritas y cerveza 330 ml al gusto',
        Precio: 26900,
        Combo: true,
        Descuento: 10,
        TiempoEntrega: 50,
        Valoracion: 4.6

    },
    {
        Restaurante: 'Chilis',
        Categoria: 'Hamburguesas',
        Nombre: 'Hamburguesa sencilla',
        img: 'Basedatos/Restaurantes/Chilis/Hambuguersas/hamb-sencilla.jpg',
        Descripcion: 'Deliciosa carne de 150g, vegetales y queso premium acompañado con papas fritas',
        Precio: 16900,
        Combo: false,
        Descuento: 15,
        TiempoEntrega: 30,
        Valoracion: 3.8

    },
    {
        Restaurante: 'Chilis',
        Categoria: 'Mexicana',
        Nombre: 'Nachos',
        img: 'Basedatos/Restaurantes/Chilis/Mexicana/nachos.jpg',
        Descripcion: 'Nachos originales de maiz, carne molida, guacamole, jalapeños y queso cheddar',
        Precio: 16500,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 30,
        Valoracion: 4.0

    },
    {
        Restaurante: 'Chilis',
        Categoria: 'Mexicana',
        Nombre: 'Quesadillas',
        img: 'Basedatos/Restaurantes/Chilis/Mexicana/quesadillas.jpg',
        Descripcion: 'Quesadillas a base de totillas de maiz, vegetalaes, queso y pollo',
        Precio: 20000,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 30,
        Valoracion: 3.9

    },
    {
        Restaurante: 'Chilis',
        Categoria: 'Mexicana',
        Nombre: 'Tacos',
        img: 'Basedatos/Restaurantes/Chilis/Mexicana/tacos.jpg',
        Descripcion: 'Tacos x3, pollo especial, chorizo americano y carne gouslast',
        Precio: 18000,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 10,
        Valoracion: 4.5

    },
    {
        Restaurante: 'Chilis',
        Categoria: 'Perros',
        Nombre: 'Perro chilis',
        img: 'Basedatos/Restaurantes/Chilis/Perros/combo-2perro.jpeg',
        Descripcion: '2x1 Deliciosos perros americanos, salsa de la casa, cebolla griche, queso y fosforitos',
        Precio: 23490,
        Combo: true,
        Descuento: 0,
        TiempoEntrega: 38,
        Valoracion: 4.8

    },
    {
        Restaurante: 'Cielito Lindo',
        Categoria: 'Bebidas',
        Nombre: 'Gaseosa 1.5L',
        img: 'Basedatos/Restaurantes/CielitoLindo/Bebidas/colombiana-1.5l.jpg',
        Descripcion: 'Colombiana 1.5L',
        Precio: 3490,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 25,
        Valoracion: 5

    },
    {
        Restaurante: 'Cielito Lindo',
        Categoria: 'Bebidas',
        Nombre: 'Gaseosa 1.5L',
        img: 'Basedatos/Restaurantes/CielitoLindo/Bebidas/colombiana-1.5l.jpg',
        Descripcion: 'Colombiana 1.5L',
        Precio: 3490,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 25,
        Valoracion: 5

    },
    {
        Restaurante: 'Cielito Lindo',
        Categoria: 'Bebidas',
        Nombre: 'Gaseosa personal',
        img: 'Basedatos/Restaurantes/CielitoLindo/Bebidas/gaseosa-personal.jpg',
        Descripcion: 'Gaseosa personal Qatro',
        Precio: 1490,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 25,
        Valoracion: 5

    },
    {
        Restaurante: 'Cielito Lindo',
        Categoria: 'Bebidas',
        Nombre: 'Limonada',
        img: 'Basedatos/Restaurantes/CielitoLindo/Bebidas/limonada.jpg',
        Descripcion: 'Limonada con azucar o panela',
        Precio: 2490,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 25,
        Valoracion: 5

    },
    {
        Restaurante: 'Cielito Lindo',
        Categoria: 'Hamburguesas',
        Nombre: 'Combo Familiar Hamburguesas cilieto lindo',
        img: 'Basedatos/Restaurantes/CielitoLindo/Hamburguesas/combo-hambs.jpg',
        Descripcion: '3 hamburguesas especiales + gaseosal 1.5L + papas fritas',
        Precio: 36990,
        Combo: true,
        Descuento: 0,
        TiempoEntrega: 55,
        Valoracion: 4.6

    },
    {
        Restaurante: 'Cielito Lindo',
        Categoria: 'Hamburguesas',
        Nombre: 'Hamburguesa Gourmet',
        img: 'Basedatos/Restaurantes/CielitoLindo/Hamburguesas/hamb-griche.jpg',
        Descripcion: 'Pollo apanado de 80g con vegetales en salsa arabe y queso chedar',
        Precio: 17990,
        Combo: false,
        Descuento: 10,
        TiempoEntrega: 43,
        Valoracion: 4.7

    },
    {
        Restaurante: 'Cielito Lindo',
        Categoria: 'Hamburguesas',
        Nombre: 'Hamburguesa Sencilla',
        img: 'Basedatos/Restaurantes/CielitoLindo/Hamburguesas/hamb-sencilla.jpg',
        Descripcion: 'Carne 80g vegetales y queso',
        Precio: 16990,
        Combo: false,
        Descuento: 5,
        TiempoEntrega: 33,
        Valoracion: 3.4

    },
    {
        Restaurante: 'Cielito Lindo',
        Categoria: 'Mexicana',
        Nombre: 'Burrito Mexicano',
        img: 'Basedatos/Restaurantes/CielitoLindo/Mexicana/burritos.jpg',
        Descripcion: 'Burrito de torta de maiz, carne, pollo, pico de gallo y vegetales',
        Precio: 19990,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 39,
        Valoracion: 4.1

    },
    {
        Restaurante: 'Cielito Lindo',
        Categoria: 'Mexicana',
        Nombre: 'Nachos',
        img: 'Basedatos/Restaurantes/CielitoLindo/Mexicana/nacho.jpg',
        Descripcion: 'Nachos mexicanos, aguacate, queso, carne molida, vegetales y frijol',
        Precio: 21490,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 36,
        Valoracion: 4.6

    },
    {
        Restaurante: 'Cielito Lindo',
        Categoria: 'Mexicana',
        Nombre: 'Quesadillas mixtas',
        img: 'Basedatos/Restaurantes/CielitoLindo/Mexicana/quesadillas.jpg',
        Descripcion: 'Torta de maiz, carne, pollo., vegetales, pico de gallo y pimenton verde',
        Precio: 20490,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 39,
        Valoracion: 4.4

    },
    {
        Restaurante: 'Cielito Lindo',
        Categoria: 'Mexicana',
        Nombre: 'Tacos',
        img: 'Basedatos/Restaurantes/CielitoLindo/Mexicana/tacos.jpg',
        Descripcion: 'Tacos carne, lomo, pollo y especial mexicano',
        Precio: 25490,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 42,
        Valoracion: 4.9

    },
    {
        Restaurante: 'Cielito Lindo',
        Categoria: 'Perros',
        Nombre: 'Combo perro',
        img: 'Basedatos/Restaurantes/CielitoLindo/Perros/perro-combo.jpg',
        Descripcion: 'Perro especial + papas + gaseosa cocacola 330 ml',
        Precio: 17990,
        Combo: true,
        Descuento: 0,
        TiempoEntrega: 30,
        Valoracion: 3.7

    },

    {
        Restaurante: 'Cielito Lindo',
        Categoria: 'Perros',
        Nombre: 'Perro sencillo',
        img: 'Basedatos/Restaurantes/CielitoLindo/Perros/perro-sencillo.jpg',
        Descripcion: 'Salchica americana, tocineta y fosforito',
        Precio: 14990,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 30,
        Valoracion: 4.0

    },
    {
        Restaurante: 'La tapa',
        Categoria: 'Bebidas',
        Nombre: 'Gaseosa 1.5L',
        img: 'Basedatos/Restaurantes/Latapa/Bebidas/gaseosa-1.5l.jpg',
        Descripcion: 'Gaseosa de 1.5l cocacola',
        Precio: 2990,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 25,
        Valoracion: 5

    },

    {
        Restaurante: 'La tapa',
        Categoria: 'Bebidas',
        Nombre: 'Panelada',
        img: 'Basedatos/Restaurantes/Latapa/Bebidas/limonada-panela.jpg',
        Descripcion: 'Limonada de panela 100% natural',
        Precio: 1990,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 25,
        Valoracion: 5

    },
    {
        Restaurante: 'La tapa',
        Categoria: 'Entradas',
        Nombre: 'Aros de cebolla',
        img: 'Basedatos/Restaurantes/Latapa/Entradas/cebollas.jpg',
        Descripcion: 'Aros de cebolla apanadas',
        Precio: 8990,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 25,
        Valoracion: 4.9

    },
    {
        Restaurante: 'La tapa',
        Categoria: 'Entradas',
        Nombre: 'Nachos',
        img: 'Basedatos/Restaurantes/Latapa/Entradas/nachos.jpg',
        Descripcion: 'Nachos junto con queso cheddar o queso campesino',
        Precio: 9990,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 20,
        Valoracion: 4.9

    },
    {
        Restaurante: 'La tapa',
        Categoria: 'Entradas',
        Nombre: 'Papas',
        img: 'Basedatos/Restaurantes/Latapa/Entradas/papas.jpg',
        Descripcion: 'Papas crunch con tres salsas especiales',
        Precio: 9990,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 25,
        Valoracion: 4.8

    },

    {
        Restaurante: 'La tapa',
        Categoria: 'Hamburguesas',
        Nombre: 'Hamburguesa sencilla',
        img: 'Basedatos/Restaurantes/Latapa/Hamburguesas/hamb-sencilla.jpg',
        Descripcion: 'Hamburguesa de 100g vegetales y doble queso',
        Precio: 23990,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 32,
        Valoracion: 4.7

    },
    {
        Restaurante: 'La tapa',
        Categoria: 'Hamburguesas',
        Nombre: 'Hamburguesa La Tapa',
        img: 'Basedatos/Restaurantes/Latapa/Hamburguesas/ham-doble.jpg',
        Descripcion: 'Res de 150g y 80g, doble queso, vegetales, salsa a base de aguacate',
        Precio: 29990,
        Combo: false,
        Descuento: 0,
        TiempoEntrega: 42,
        Valoracion: 4.8

    },
    {
        Restaurante: 'La tapa',
        Categoria: 'Hamburguesas',
        Nombre: 'Combo hamburguesas especiales',
        img: 'Basedatos/Restaurantes/Latapa/Hamburguesas/promo-2ham.jpg',
        Descripcion: 'Dos hamburguesas de 120g, doble queso y vegetales',
        Precio: 32990,
        Combo: true,
        Descuento: 0,
        TiempoEntrega: 48,
        Valoracion: 4.8

    },

    {
        Restaurante: 'La tapa',
        Categoria: 'Perros',
        Nombre: 'Perro especial',
        img: 'Basedatos/Restaurantes/Latapa/Perros/perro-especial.jpg',
        Descripcion: 'Perro especial salchica america, trozitos de tocineta vegetales y queso',
        Precio: 21990,
        Combo: false,
        Descuento: 20,
        TiempoEntrega: 45,
        Valoracion: 4.5

    },
    {
        Restaurante: 'La tapa',
        Categoria: 'Perros',
        Nombre: 'Perro mexicano',
        img: 'Basedatos/Restaurantes/Latapa/Perros/perro-mex.jpg',
        Descripcion: 'Perro en ensalada pico gallo',
        Precio: 12990,
        Combo: false,
        Descuento: 15,
        TiempoEntrega: 35,
        Valoracion: 3.8

    },
    
    
    
    
    
    

    
];
