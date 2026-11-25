const work=[
['arquitetura','Projeto arquitetônico',4,'Do estudo de implantação à definição de volumes, materiais e aberturas, o projeto articula o programa com a maneira de ocupar o lugar.'],
['interiores','Projeto de interiores',4,'Layout, iluminação, mobiliário e materiais definem como cada ambiente funciona e como ele é percebido ao longo do dia.'],
['externas','Perspectivas externas',10,''],
['internas','Perspectivas internas',10,''],
['plantas','Plantas humanizadas',3,'Vista de cima, a planta humanizada mostra onde o mobiliário cabe, como os ambientes se conectam e por onde as pessoas circulam. É uma forma de apresentar o layout a quem tem pouca familiaridade com desenhos técnicos.'],
['filmes','Filmes de arquitetura',2,'O filme conduz o olhar pelo projeto. O movimento de câmera mostra percursos e transições entre ambientes, enquanto a luz, a montagem e o som ajudam a situar a experiência de cada espaço.'],
['master-plan','Master Plans',3,'A modelagem 3D de um master plan reúne volumes, vias, espaços abertos e paisagismo na mesma cena. A texturização diferencia superfícies e usos. A iluminação e a finalização dão legibilidade ao conjunto, tanto em vistas aéreas quanto ao nível da rua.'],
['modelagem-arquitetura','Modelagem de arquitetura',3,'Geometria do edifício e de seu entorno construída a partir de desenhos e referências, com nível de detalhe adequado às vistas e aos usos previstos.'],
['fotomontagem','Fotomontagem',3,'Inserção do modelo 3D em uma fotografia real do local. Câmera, escala e perspectiva alinhadas, com luz e sombras ajustadas para mostrar como a proposta se encaixa no entorno.'],
['assets','Modelagem de assets',3,'Modelagem de mobiliário, equipamentos e elementos sob medida para compor cenas 3D. Geometria e materiais preparados de acordo com a escala e a proximidade da câmera.'],
['estandes','Estandes',2,'Imagens 3D de estandes para feiras e eventos. As perspectivas ajudam a avaliar a circulação, a visibilidade da marca e a iluminação antes da montagem.'],
['interatividade','Interatividade',0,'Tours virtuais e experiências interativas permitem que o cliente percorra o projeto no próprio ritmo, escolha os ambientes e explore os detalhes antes da obra.']
];
const groups=['Projeto','Projeto','Archviz','Archviz','Archviz','Archviz','Archviz','Modelagem','Archviz','Modelagem','Archviz','Archviz'];
const number=i=>String(i+1).padStart(2,'0');
const chapters=[
 ['projeto','Projetos','Arquitetura e interiores',['arquitetura','interiores']],
 ['archviz','Archviz','Imagens e filmes',['externas','internas','plantas','filmes','master-plan','estandes','fotomontagem']],
 ['modelagem','Modelagem','Edifícios e objetos',['modelagem-arquitetura','assets']]
];
const index=()=>'<div class="montage">'+chapters.map(([id,title,label])=>'<a class="tile '+id+'" href="#'+id+'">'+photo(covers[id])+'<span class="tile-title"><small>'+label+'</small><strong>'+title+'</strong></span><span class="tile-arrow" aria-hidden="true">↗</span></a>').join('')+'</div>';
const links=ids=>'<div class="stories">'+ids.map((id,i)=>{const [,title,,copy]=work.find(row=>row[0]===id);return '<article class="story"><a class="story-image" href="#'+id+'">'+(selections[id]?photo(selections[id][0]):'')+'<span aria-hidden="true">↗</span></a><div><small>'+number(i)+' / '+(id==='filmes'?'Movimento':'Portfólio')+'</small><h2><a href="#'+id+'">'+title+'</a></h2>'+(copy?'<p>'+copy+'</p>':'')+'</div></article>'}).join('')+'</div>';
const photos={"0":"img/acervo/0.jpg","1":"img/acervo/1.jpg","2":"img/acervo/2.jpg","3":"img/acervo/3.jpg","4":"img/acervo/4.jpg","6":"img/acervo/6.jpg","7":"img/acervo/7.jpg","8":"img/acervo/8.jpg","9":"img/acervo/9.jpg","11":"img/acervo/11.jpg","12":"img/acervo/12.jpg","13":"img/acervo/13.jpg","16":"img/acervo/16.jpg","18":"img/acervo/18.jpg","19":"img/acervo/19.jpg","20":"img/acervo/20.jpg","21":"img/acervo/21.jpg","23":"img/acervo/23.jpg","24":"img/acervo/24.jpg","28":"img/acervo/28.jpg","33":"img/acervo/33.jpg","35":"img/acervo/35.jpg","61":"img/acervo/61.jpg","65":"img/acervo/65.jpg","71":"img/acervo/71.jpg","72":"img/acervo/72.jpg","73":"img/acervo/73.jpg","74":"img/acervo/74.jpg","75":"img/acervo/75.jpg","77":"img/acervo/77.jpg","81":"img/acervo/81.jpg","88":"img/acervo/88.jpg","90":"img/acervo/90.jpg","wix-49":"img/acervo/wix-49.jpg","wix-55":"img/acervo/wix-55.jpg","wix-56":"img/acervo/wix-56.jpg","wix-63":"img/acervo/wix-63.jpg","wix-67":"img/acervo/wix-67.jpg","wix-69":"img/acervo/wix-69.jpg","wix-70":"img/acervo/wix-70.jpg","wix-76":"img/acervo/wix-76.jpg","wix-80":"img/acervo/wix-80.jpg","wix-84":"img/acervo/wix-84.jpg","wix-85":"img/acervo/wix-85.jpg","wix-89":"img/acervo/wix-89.jpg","film-07":"img/acervo/film-07.jpg","film-22":"img/acervo/film-22.jpg","wix-87":"img/acervo/wix-87.jpg","wix-83":"img/acervo/wix-83.jpg","Orion":"img/acervo/Orion.jpg","Calder":"img/acervo/Calder.jpg","Lelong":"img/acervo/Lelong.jpg"};
const selections={"externas":[12,33,9,16,0,4,7,19,24,35,"wix-49","wix-55","wix-56","wix-67"],"internas":[2,28,6,61,11,13,65,18,71,20,"wix-63","wix-69","wix-70","wix-76"],"fotomontagem":[3],"plantas":[75,72,90,"wix-83","wix-87"],"master-plan":[77,81,88,"wix-85"],"estandes":[73,74],"modelagem-arquitetura":["mod1","mod2","mod3","mod4"],"assets":["Orion","Calder","Lelong"]};
const films=[{"poster":"film-22","src":"media/filme-22.mp4"},
 {"src":"media/wix/2026-10-29_c0_e036932d.mp4","vertical":true},
 {"src":"media/wix/2026-03-13_freepik-1280x720-24fps-71188_b3714471.mp4"}];
const covers={"projeto":1,"archviz":2,"modelagem":21};
// Acervo migrado do Wix (js/acervo-wix.js): soma as imagens às categorias do portfólio
Object.entries(window.WIX_ACERVO||{}).forEach(([key,[category,path]])=>{
 photos[key]=path;
 if(category.startsWith('_'))return;
 (selections[category]=selections[category]||[]).push(key);
});
// Fotos duplicadas: a versão menor dá lugar à de maior resolução (na mesma posição); as cópias de mesmo tamanho saem.
const higherRes={"12":"w54","33":"w12","9":"w10","16":"w18","4":"w104","24":"w38","2":"w29","6":"w25","11":"w22","13":"w7","18":"w32","65":"w91","20":"w207","wix-63":"w90","wix-70":"w33","90":"w86","75":"w81","72":"w87","wix-83":"w85","wix-87":"w84","0":"w3","77":"w106","19":"w53"};
const duplicates=new Set(["61","w13","w20","w31","w205","w183","w162","w160","w165","w196","w197","w209","w158","w159"]);
Object.keys(selections).forEach(c=>{
 selections[c]=selections[c].map(k=>higherRes[k]||k).filter((k,i,a)=>!duplicates.has(String(k))&&a.findIndex(x=>String(x)===String(k))===i);
});
const uncuratedSelections=JSON.parse(JSON.stringify(selections)); // usado pela tela curadoria.html
// Curadoria do Saulo (marcadas como "Sai" na tela curadoria.html).
const curatedOut={externas:["w53","wix-49","w5","w6","w24","w28","w30","w35","w39","w45","w50","w60","w61","w77","w82","w83","w96","w98","w109","w110","w111","w118","w119","w135","w136","w139","w137","w138","w140","w143","w144","w145","w146","w178","w179","w181","w182","w186","w184","w188","w189","w200","w201","w203","w208","w211","w214","w215","w216"],
 internas:["w40","w164","w22","w90","w19","w44","w49","w51","w65","w66","w67","w68","w69","w70","w71","w72","w73","w74","w116","w142","w153","w154","w155","w156","w157","w163","w166","w167","w168","w169","w171","w172","w173","w180","w185","w187","w190","w192","w194","w198","w199"]};
Object.entries(curatedOut).forEach(([c,out])=>{const s=new Set(out);selections[c]=(selections[c]||[]).filter(k=>!s.has(String(k)))});
// Projetos (vindos da página "Architectural Design" do Wix, na mesma ordem de lá).
selections.arquitetura=["w99","w104","w105","w103","w118","w119","w113","w112","w135","w138","w117","w140","w139","w146","w145","w136","w97","w96","w98","w143"];
selections.interiores=["w89","w93","w92","w95","w91","w94","w142","w153","w154","w155","w156","w160","w161","w162","w163","w217","w164","w165","w218"];
// Plantas humanizadas: seleção de 10 (as demais continuam no acervo).
selections.plantas=["w81","w87","w191","w86","w120","w147","w84","w212","w123","w134"];
// Miniatura leve (img/mini, até 1200 px) na página; a foto original só abre na tela cheia.
// width/height reservam o espaço antes de a imagem carregar, para o mosaico não pular.
const mini=path=>/^img\/(acervo|wix|modelagem)\//.test(path||'')?path.replace(/^img\//,'img/mini/'):path;
const photo=(id,style='hero-image',loading='lazy',alt='')=>{const full=photos[id],size=(window.IMG_DIMS||{})[full];
 return '<img class="'+style+'" src="'+mini(full)+'" data-full="'+full+'"'+(size?' width="'+size[0]+'" height="'+size[1]+'"':'')+' alt="'+alt+'" loading="'+loading+'" decoding="async">';};
let backdropKey=null;
function setBackdrop(key){
 if(backdropKey===key)return;
 backdropKey=key;
 // Troca o fundo só depois que a nova imagem estiver carregada, para não piscar.
 const holder=document.createElement('div');holder.innerHTML=photo(key,'site-backdrop-image','eager');
 const img=holder.firstChild,box=document.querySelector('.site-backdrop');
 const swap=()=>{if(backdropKey===key)box.replaceChildren(img)};
 if(!box.firstChild||img.complete)swap();else{img.onload=img.onerror=swap;setTimeout(swap,1500)}
}
// Deixa as duas imagens de fundo já no cache do navegador.
['film-22'].forEach(k=>{const i=new Image();i.src=mini(photos[k])});
setBackdrop('film-22');
// Filme de fundo: mostra a imagem parada (poster) até haver dados suficientes para tocar sem travar.
// Online o filme chega aos poucos; tocar antes disso causa o "tranco" (para e recomeça).
function smoothPlay(video){
 if(!video)return;
 video.muted=true;
 const go=()=>{if(video.isConnected)video.play().catch(()=>{})};
 if(video.readyState>=4)go();
 else{video.addEventListener('canplaythrough',go,{once:true});if(video.networkState===0)video.load()}
}
function pageFilm(){
 const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
 return '<video class="page-film" muted loop playsinline preload="auto" poster="'+photos['film-22']+'"'+' aria-hidden="true"><source src="media/filme-22.mp4" type="video/mp4"></video><div class="page-film-shade" aria-hidden="true"></div>';
}
function filmGallery(title){
 const players=films.map(({src,poster},index)=>
  '<video class="portfolio-film'+(films[index].vertical?' is-vertical':'')+'" controls playsinline preload="'+(poster?'none':'metadata')+'"'+(poster?' poster="'+photos[poster]+'"':'')+' aria-label="'+localized(title)+' '+(index+1)+'">'+
  '<source src="'+src+'" type="video/mp4"></video>'
 );
 return '<div class="film-gallery">'+players.join('')+'</div>';
}
function archvizCards(ids){
 return '<div class="archviz-grid">'+ids.map(id=>{
  const [,title]=work.find(row=>row[0]===id);
  const cover=id==='filmes'?films[0].poster:selections[id]?.[0];
  const art=cover===undefined?'<span class="card-graphic" aria-hidden="true"></span>':photo(cover);
  return '<a class="archviz-card '+id+(cover===undefined?'':' has-photo')+'" href="#'+id+'">'+art+
   '<span class="archviz-title">'+title+'</span><span class="archviz-arrow" aria-hidden="true">↗</span></a>';
 }).join('')+'</div>';
}
const floatingShapes='<div class="floating-shapes" aria-hidden="true"><span class="floating-loop"></span><span class="floating-orb"></span><span class="floating-spark">✦</span></div>';
const wrap=(tag,title,body)=>'<section class="wrap"><div class="tag">'+tag+'</div><h1>'+title+'</h1>'+body+'</section>';

const serviceEntries = [
 ['M3 21V9l9-6 9 6v12H3Zm6 0v-7h6v7',
  ['Arquitetura e interiores','Projetos de arquitetura e de interiores desenvolvidos a partir do programa e das condições do terreno: implantação, distribuição dos espaços, volumes, mobiliário, iluminação e materiais, conforme o escopo de cada etapa.'],
  ['Architecture and interiors','Architectural and interior design developed from the brief and site conditions: placement, layout, building form, furniture, lighting and materials, according to the scope of each phase.'],
  ['Arquitectura e interiores','Proyectos de arquitectura e interiores desarrollados a partir del programa y las condiciones del terreno: implantación, distribución, volúmenes, mobiliario, iluminación y materiales, según el alcance de cada etapa.']],
 ['M3 21V5l9-3 9 3v16H3Zm9-19v19M3 10l9-3 9 3M3 15l9-3 9 3',
  ['Desenhos técnicos e BIM','Plantas, cortes, elevações e detalhes com cotas e indicações de projeto. Modelos BIM com geometria e informações do edifício para documentação e compatibilização.'],
  ['Technical drawings and BIM','Dimensioned plans, sections, elevations and details with project annotations. BIM models combining building geometry and data for documentation and coordination.'],
  ['Dibujos técnicos y BIM','Plantas, secciones, alzados y detalles con cotas e indicaciones de proyecto. Modelos BIM con la geometría y los datos del edificio para documentación y coordinación.']],
 ['M3 21h18M5 21V9l8-5v17m0-12 6 3v9M8 12h2m-2 4h2m6 0h1',
  ['Perspectivas','Imagens internas e externas. Internas: enquadramento, iluminação, mobiliário e materiais que mostram a escala e a atmosfera de cada ambiente. Externas: fachadas, acessos e a relação do edifício com a rua e a paisagem.'],
  ['Renderings','Interior and exterior images. Interiors: framing, lighting, furniture and materials that convey the scale and atmosphere of each room. Exteriors: façades, entrances and the building’s relationship to the street and landscape.'],
  ['Perspectivas','Imágenes interiores y exteriores. Interiores: encuadre, iluminación, mobiliario y materiales que transmiten la escala y la atmósfera de cada espacio. Exteriores: fachadas, accesos y la relación del edificio con la calle y el paisaje.']],
 ['M3 3h18v18H3V3Zm8 0v8H3m8 0h10m-5 0v10M6 15h5v3H6z',
  ['Planta humanizada','Layout em vista superior, com mobiliário, materiais e áreas de circulação, para comparar distribuições e visualizar o uso dos ambientes.'],
  ['Furnished floor plan','Top-down layout with furniture, materials and circulation areas, to compare layouts and visualize how rooms can be used.'],
  ['Planta amueblada','Distribución en vista superior, con mobiliario, materiales y zonas de circulación, para comparar distribuciones y visualizar el uso de los ambientes.']],
 ['M3 5h18v14H3V5Zm7 4 5 3-5 3V9Z',
  ['Filmes e interatividade','Criação de filmes de arquitetura com percursos de câmera que conectam os ambientes, e de experiências interativas para percorrer o projeto no próprio ritmo.'],
  ['Films and interactive','Architectural films with camera paths that connect spaces, and interactive experiences for exploring the project at your own pace.'],
  ['Películas e interactividad','Creación de películas de arquitectura con recorridos de cámara que conectan los espacios, y de experiencias interactivas para recorrer el proyecto al propio ritmo.']],
 ['M7 3h10v9H7V3ZM3 12h8v9H3v-9Zm10 3h8v6h-8v-6Z',
  ['Modelagem 3D','Modelagem de edifícios a partir de plantas, cortes e referências, da volumetria às fachadas e esquadrias. Modelagem de mobiliário, equipamentos e objetos sob medida, com o nível de detalhe adequado à câmera.'],
  ['3D modeling','Building models from plans, sections and references, from massing to façades and openings. Furniture, equipment and bespoke objects, with the level of detail each camera requires.'],
  ['Modelado 3D','Modelado de edificios a partir de plantas, secciones y referencias, desde la volumetría hasta las fachadas y carpinterías. Modelado de mobiliario, equipamiento y objetos a medida, con el detalle que requiere cada cámara.']],
 ['M3 3h18v18H3V3Zm0 6h18M9 9v12M15 9v12M3 15h6m6 0h6',
  ['Master plans','Modelagem de master plans com volumes, vias, espaços abertos e paisagismo. Texturização e iluminação que dão legibilidade ao conjunto, em vistas aéreas e ao nível da rua.'],
  ['Master plans','Master plan models with buildings, roads, open spaces and landscaping. Texturing and lighting that make the whole development legible, in aerial and street-level views.'],
  ['Planes maestros','Modelado de planes maestros con volúmenes, vías, espacios abiertos y paisajismo. Texturizado e iluminación que hacen legible el conjunto, en vistas aéreas y a nivel de calle.']],
 ['M3 5h18v14H3V5Zm0 10 5-5 4 4 3-3 6 6M15 9h.01',
  ['Fotomontagem','Inserção do modelo 3D em fotografias reais do local, com câmera, escala e perspectiva alinhadas e luz e sombras ajustadas, para mostrar como a proposta se encaixa no entorno.'],
  ['Photomontage','The 3D model placed into real photographs of the site, with matched camera, scale and perspective and adjusted light and shadows, to show how the proposal fits its surroundings.'],
  ['Fotomontaje','Inserción del modelo 3D en fotografías reales del lugar, con cámara, escala y perspectiva alineadas y luz y sombras ajustadas, para mostrar cómo la propuesta se integra en el entorno.']],
 ['M3 21V8l9-5 9 5v13M3 12h18M8 21v-6h8v6M7 8h10',
  ['Estandes e arquitetura promocional','Projeto e imagens 3D de estandes para feiras, eventos e ações promocionais, com estudo de circulação, visibilidade da marca e iluminação antes da montagem.'],
  ['Exhibition stands and promotional architecture','Design and 3D images of stands for trade shows, events and promotional activations, studying circulation, brand visibility and lighting before installation.'],
  ['Estands y arquitectura promocional','Proyecto e imágenes 3D de estands para ferias, eventos y acciones promocionales, con estudio de circulación, visibilidad de la marca e iluminación antes del montaje.']],
 ['M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4Zm16 0h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8V4Z',
  ['Books de empreendimentos','Criação de books para lançamento e venda de empreendimentos: diagramação, perspectivas, plantas humanizadas, textos e identidade visual, em versão impressa e digital.'],
  ['Development sales books','Sales books for launching and selling developments: layout, renderings, furnished floor plans, copy and visual identity, in print and digital versions.'],
  ['Books de emprendimientos','Creación de books para el lanzamiento y la venta de emprendimientos: diagramación, perspectivas, plantas amuebladas, textos e identidad visual, en versión impresa y digital.']],
 ['M3 4h18v13H3V4Zm0 4h18M7 21h10M12 17v4M6 6h.01M8 6h.01',
  ['Criação de sites','Sites para escritórios, empresas e empreendimentos, com design autoral, imagens em destaque e navegação pensada para apresentar o projeto e gerar contatos.'],
  ['Website design','Websites for studios, companies and developments, with bespoke design, prominent imagery and navigation built to present the project and generate leads.'],
  ['Creación de sitios web','Sitios web para estudios, empresas y emprendimientos, con diseño propio, imágenes destacadas y una navegación pensada para presentar el proyecto y generar contactos.']],
 ['M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM15.5 6h.01',
  ['Marketing de empreendimentos','Criação e gerenciamento de perfis de empresas e empreendimentos nas redes sociais: identidade visual, conteúdo, imagens e filmes, do lançamento à venda.'],
  ['Real estate marketing','Creation and management of social media profiles for companies and developments: visual identity, content, images and films, from launch to sales.'],
  ['Marketing de emprendimientos','Creación y gestión de perfiles de empresas y emprendimientos en redes sociales: identidad visual, contenido, imágenes y películas, del lanzamiento a la venta.']]
];
function renderServices(){
 const headings = {pt:'Serviços',en:'Services',es:'Servicios'};
 const column = {pt:1,en:2,es:3}[language];
 const rows = serviceEntries.map(entry=>{
  const [title,description] = entry[column];
  return '<li class="service-entry"><svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="'+entry[0]+'"/></svg><div><h2>'+title+'</h2><p>'+description+'</p></div></li>';
 }).join('');
 return '<section class="wrap information-page"><h1>'+headings[language]+'</h1><ul class="service-list">'+rows+'</ul></section>';
}
const aboutText = {
 pt: ['Sobre', [
  'Arquiteto e urbanista com 15 anos de experiência em arquitetura, interiores e visualização 3D.',
  'Estudei na PUC Minas. Minha trajetória profissional inclui experiência em Poços de Caldas e na Elephant Skin. Ao longo desse percurso, trabalhei com projeto arquitetônico, interiores, design 3D e gestão de projetos.',
  'Desenvolvo projetos de arquitetura e interiores e produzo perspectivas, plantas humanizadas, filmes e modelos 3D. Trabalho da escala do mobiliário à de conjuntos urbanos, adaptando a representação à etapa do projeto e a quem vai usá-la.'
 ]],
 en: ['About', [
  'Architect and urban planner with 15 years of experience in architecture, interiors and 3D visualization.',
  'I studied at PUC Minas. My professional background includes work in Poços de Caldas and at Elephant Skin, across architectural design, interiors, 3D design and project management.',
  'I design buildings and interiors and produce renderings, furnished floor plans, films and 3D models. My work ranges from furniture to urban developments, with the presentation tailored to the design stage and its audience.'
 ]],
 es: ['Sobre mí', [
  'Arquitecto y urbanista con 15 años de experiencia en arquitectura, interiores y visualización 3D.',
  'Estudié en la PUC Minas. Mi trayectoria incluye experiencia en Poços de Caldas y en Elephant Skin, en áreas como diseño arquitectónico, interiores, diseño 3D y gestión de proyectos.',
  'Desarrollo proyectos de arquitectura e interiores y produzco perspectivas, plantas amuebladas, películas y modelos 3D. Trabajo desde la escala del mobiliario hasta la de los conjuntos urbanos, adaptando la representación a cada etapa y a su público.'
 ]]
};
function renderAbout(){
 const [title, paragraphs] = aboutText[language];
 return '<section class="wrap information-page"><h1>'+title+'</h1><div class="about-layout about-v3"><img class="about-avatar" src="img/acervo/saulo-retrato-circulo.jpg" width="800" height="800" alt="Saulo Morais"><div class="about-copy">'+
  paragraphs.map(paragraph=>'<p>'+paragraph+'</p>').join('')+
  '<a href="https://br.linkedin.com/in/saulomoraisarquiteto" target="_blank" rel="noopener">LinkedIn ↗</a></div></div></section>';
}

function render(){
 const raw=location.hash.slice(1); const id=(raw==='trabalhos'?'projetos':raw)||'home'; document.body.classList.toggle('home',id==='home'); document.body.classList.toggle('work-page',id==='projetos'); document.body.classList.toggle('services-page',id==='servicos'); document.body.classList.toggle('about-page',id==='sobre'); document.body.classList.toggle('blog-page',id==='blog'); setBackdrop('film-22'); document.body.classList.toggle('archviz-page',id==='archviz'); const i=work.findIndex(row=>row[0]===id);
 const chapter=chapters.find(row=>row[0]===id); let page;
 if(id==='home') page='<section class="landing">'+landingFilm()+
  '<div class="landing-content"><p class="landing-kicker">Saulo Morais · Arquiteto e urbanista</p>'+
  '<h1><span>Arquitetura.</span><span>Visualização</span><span>em 3D.</span></h1>'+
  '<p class="landing-description">Projetos de arquitetura, storytelling e marketing imobiliário para apresentar e vender espaços.</p>'+
  '<a class="landing-action" href="#projetos">Explorar trabalhos <span aria-hidden="true">↗</span></a></div></section>';
 else if(id==='projetos') page=workIndex();
 else if(id==='sobre') page=renderAbout();
 else if(id==='servicos') page=renderServices();
 else if(id==='blog') page=wrap('04 / Blog · Textos de estreia','Blog','<details class="article"><summary>O que uma planta humanizada ajuda a decidir</summary><p>Experimente comparar duas opções de layout com o mobiliário na mesma escala. Uma mesa pode caber nas duas, mas a circulação muda quando as cadeiras estão em uso. A planta humanizada torna essa diferença visível antes de avançar para a perspectiva.</p></details><details class="article"><summary>Como escolher a primeira câmera de uma fachada</summary><p>Uma vista ao nível da rua mostra como se chega ao edifício. Uma vista mais alta explica como ele ocupa o terreno. A primeira imagem pode responder à pergunta que mais importa naquela etapa do projeto.</p></details>');
 else if(id==='archviz'){
  page='<section class="wrap archviz-stage"><div class="archviz-opening">'+photo(covers.archviz,'hero-image','eager')+
   '<h1>Archviz</h1></div>'+archvizCards(chapter[3])+
   '<p><a href="#projetos">← Voltar a Trabalhos</a></p></section>';
 }
 else if(chapter) page=wrap('Portfólio / '+chapter[2],chapter[1],links(chapter[3])+'<p><a href="#projetos">← Todos os projetos</a></p>');
 else if(i>=0){
  const [,title,count,copy]=work[i];
  const gallery=id==='filmes'?filmGallery(title):selections[id]?'<div class="real-gallery">'+selections[id].map((image,index)=>photo(image,'gallery-photo','lazy',(id==='assets'?image:localized(({fotomontagem:'Vista aérea urbana',externas:'Perspectiva externa',internas:'Perspectiva interna'})[id]||title)+' '+(index+1)))).join('')+'</div>':count===0?'<p class="empty tag">'+localized('Em breve')+'</p>':'<p class="empty tag">'+count+(id==='filmes'?' filmes':' imagens')+' · seleção do acervo pendente</p>';
  const parent=chapters.find(chapter=>chapter[3].includes(id));
  const back=parent?.[0]==='archviz'?'<p><a href="#archviz">← Voltar a Archviz</a></p>':'<p><a href="#projetos">← Todos os projetos</a></p>';
  const text=copy?'<p class="intro">'+copy+'</p>':'';
  page=wrap(number(i)+' / '+groups[i],title,(['master-plan'].includes(id)?'<div class="split">'+text+gallery+'</div>':text+gallery)+back);
 } else page=wrap('Portfólio','Projetos',index());
 document.querySelector('main').innerHTML=page;
 document.querySelectorAll('nav a').forEach(a=>a.getAttribute('href')==='#'+(i>=0||chapter?'projetos':id)?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
 document.title=(document.querySelector('h1').textContent.replace('desenhoà','desenho à'))+' | Saulo Morais';
 window.scrollTo(0,0);
}
const dictionary=new Map([
 ['Arquitetura.','Architecture.'],['Visualização','Visualization'],['em 3D.','in 3D.'],
 ['Projetos de arquitetura, storytelling e marketing imobiliário para apresentar e vender espaços.','Architectural design, storytelling and real estate marketing to present and sell spaces.'],
 ['Explorar trabalhos ','Explore work '],['Em breve','Coming soon'],['Pausar movimento','Pause motion'],['Retomar movimento','Resume motion'],['Arraste ou use as setas para trocar a imagem','Drag or use the arrow keys to change the image'],['Trabalhos','Work'],['← Voltar a Trabalhos','← Back to Work'],['Vista aérea urbana','Urban aerial view'],['← Voltar a Archviz','← Back to Archviz'],['Perspectiva externa','Exterior rendering'],['Perspectiva interna','Interior rendering'],['Imagem do acervo','Portfolio image'],['Perspectiva externa · imagem do acervo','Exterior rendering · portfolio image'],
['Projetos','Projects'],['Projetos ↗','Projects ↗'],['Sobre','About'],['Sobre ↗','About ↗'],['Serviços','Services'],['Voltar ao início ↑','Back to top ↑'],['Arquiteto e urbanista','Architect and urban planner'],
['Saulo Morais · Arquiteto e urbanista','Saulo Morais · Architect and urban planner'],['Arquitetura','Architecture'],['em cena.','in focus.'],['Explorar Projetos ↗','Explore Projects ↗'],['Ver cena ⤢','View scene ⤢'],['Acender a luz ☼','Lights on ☼'],['Apagar a luz ☾','Lights off ☾'],
['01 / Estudo visual','01 / Visual study'],['Imagem conceitual gerada para o protótipo','Concept image generated for this prototype'],['01 / Portfólio','01 / Portfolio'],['Portfólio','Portfolio'],['Projeto','Design'],['Arquitetura e interiores','Architecture and interiors'],['Imagens e filmes','Images and films'],['Modelagem','3D modeling'],['Edifícios e objetos','Buildings and objects'],['Movimento','Motion'],
['Montagem conceitual · recortes da cena de abertura','Concept montage · crops from the opening scene'],['Imagens conceituais · acervo a selecionar','Concept images · portfolio selection pending'],['Estudo visual · imagem conceitual','Visual study · concept image'],['Fechar ×','Close ×'],
['Do projeto de um espaço à imagem que permite percorrê-lo. Explore por disciplina.','From designing a space to creating an image that lets you experience it. Explore by discipline.'],
['02 / Sobre mim','02 / About me'],['Sou Saulo Morais, arquiteto e urbanista. Trabalho com arquitetura, interiores e visualização 3D.','I’m Saulo Morais, an architect and urban planner working across architecture, interiors and 3D visualization.'],
['Desenvolvo projetos de arquitetura e interiores e produzo imagens, filmes e modelos 3D para comunicar ideias de projeto. Meu trabalho vai da escala do mobiliário à representação de conjuntos urbanos.','I design buildings and interiors and create images, films and 3D models to communicate design ideas. My work ranges from furniture to urban developments.'],
['Conhecer os projetos ↗','View projects ↗'],['03 / Serviços','03 / Services'],['Visualização 3D','3D visualization'],['Arquitetura e interiores, da organização do programa à definição espacial e material.','Architecture and interiors, from defining the brief to developing spaces and selecting materials.'],['Perspectivas, plantas humanizadas e filmes para apresentar projetos, além de modelagem de edifícios, assets e master plans.','Renderings, furnished floor plans and films for project presentations, plus 3D modeling for buildings, assets and master plans.'],
['04 / Blog · Textos de estreia','04 / Blog · First posts'],
['O que uma planta humanizada ajuda a decidir','What a furnished floor plan helps you decide'],['Experimente comparar duas opções de layout com o mobiliário na mesma escala. Uma mesa pode caber nas duas, mas a circulação muda quando as cadeiras estão em uso. A planta humanizada torna essa diferença visível antes de avançar para a perspectiva.','Compare two layouts with furniture at the same scale. A table may fit in both, but circulation changes when the chairs are in use. A furnished floor plan reveals the difference before you move on to a rendering.'],
['Como escolher a primeira câmera de uma fachada','How to choose the first camera angle for a façade'],['Uma vista ao nível da rua mostra como se chega ao edifício. Uma vista mais alta explica como ele ocupa o terreno. A primeira imagem pode responder à pergunta que mais importa naquela etapa do projeto.','A street-level view shows how people approach a building. A higher view explains how it sits on the site. Start with the image that answers the most important question at that stage.'],['← Todos os projetos','← All projects']
]);
const englishWork=[
 ['Architectural design','From site planning to the definition of volumes, materials and openings, the design connects the brief with the way people will use the site.'],
 ['Interior design','Layout, lighting, furniture and materials shape how each room works and how it feels throughout the day.'],
 ['Exterior renderings',''],['Interior renderings',''],
 ['Furnished floor plans','A top-down view shows how furniture fits, how rooms connect and where people move. It makes the layout accessible to people unfamiliar with technical drawings.'],
 ['Architectural films','Camera movement shows routes and transitions between spaces. Light, editing and sound help convey the experience of moving through the project.'],
 ['Master plans','A 3D master plan brings building volumes, roads, open spaces and landscaping into one scene. Textures distinguish surfaces and uses. Lighting and finishing clarify the overall development in aerial and street-level views.'],
 ['Architectural modeling','Geometry of buildings and their surroundings built from drawings and references, with the level of detail each view and intended use requires.'],
 ['Photomontage','A 3D model inserted into a real photograph of the site. Camera angle, scale and perspective are matched, and lighting and shadows adjusted to show how the proposal fits into its surroundings.'],
 ['3D asset modeling','Modeling of furniture, equipment and custom elements for 3D scenes. Geometry and materials are prepared for the scale of the object and its distance from the camera.'],
 ['Exhibition stands','3D renderings of stands for trade shows and events. The views help assess circulation, brand visibility and lighting before installation.'],
 ['Interactive','Virtual tours and interactive experiences let clients walk through the project at their own pace, choose rooms and explore details before construction.']
];
work.forEach(([,title,,copy],i)=>{dictionary.set(title,englishWork[i][0]);if(copy)dictionary.set(copy,englishWork[i][1])});
const spanish=new Map(Object.entries({
 'Architecture.':'Arquitectura.','Visualization':'Visualización','in 3D.':'en 3D.',
 'Architectural design, storytelling and real estate marketing to present and sell spaces.':'Proyectos de arquitectura, storytelling y marketing inmobiliario para presentar y vender espacios.',
 'Explore work ':'Explorar trabajos ','Coming soon':'Próximamente','Pause motion':'Pausar movimiento','Resume motion':'Reanudar movimiento',
 'Drag or use the arrow keys to change the image':'Arrastra o usa las flechas para cambiar la imagen','Home':'Inicio','Work':'Trabajos','← Back to Work':'← Volver a Trabajos','Projects':'Proyectos','Projects ↗':'Proyectos ↗','About':'Sobre mí','About ↗':'Sobre mí ↗','Services':'Servicios','Back to top ↑':'Volver al inicio ↑',
 'Architect and urban planner':'Arquitecto y urbanista','Saulo Morais · Architect and urban planner':'Saulo Morais · Arquitecto y urbanista',
 'Architecture':'Arquitectura','in focus.':'en escena.','Explore Projects ↗':'Explorar proyectos ↗','View scene ⤢':'Ver escena ⤢','Lights on ☼':'Encender la luz ☼','Lights off ☾':'Apagar la luz ☾',
 '01 / Visual study':'01 / Estudio visual','Portfolio image':'Imagen del portafolio','Portfolio':'Portafolio','Design':'Diseño',
 'Architecture and interiors':'Arquitectura e interiores','Images and films':'Imágenes y películas','3D modeling':'Modelado 3D','Buildings and objects':'Edificios y objetos','Motion':'Movimiento',
 'Close ×':'Cerrar ×','Exterior rendering · portfolio image':'Perspectiva exterior · imagen del portafolio','Urban aerial view':'Vista aérea urbana','← Back to Archviz':'← Volver a Archviz','← All projects':'← Todos los proyectos','Exterior rendering':'Perspectiva exterior','Interior rendering':'Perspectiva interior',
 'From designing a space to creating an image that lets you experience it. Explore by discipline.':'Del diseño de un espacio a la imagen que permite recorrerlo. Explora por disciplina.',
 'About me':'Sobre mí','I’m Saulo Morais, an architect and urban planner working across architecture, interiors and 3D visualization.':'Soy Saulo Morais, arquitecto y urbanista. Trabajo en arquitectura, interiores y visualización 3D.',
 'I design buildings and interiors and create images, films and 3D models to communicate design ideas. My work ranges from furniture to urban developments.':'Diseño edificios e interiores y creo imágenes, películas y modelos 3D para comunicar ideas de proyecto. Mi trabajo abarca desde el mobiliario hasta los conjuntos urbanos.',
 'View projects ↗':'Ver proyectos ↗','3D visualization':'Visualización 3D',
 'Architecture and interiors, from defining the brief to developing spaces and selecting materials.':'Arquitectura e interiores, desde la definición del programa hasta el diseño de espacios y la selección de materiales.',
 'Renderings, furnished floor plans and films for project presentations, plus 3D modeling for buildings, assets and master plans.':'Perspectivas, planos amueblados y películas para presentar proyectos, además de modelado 3D de edificios, objetos y planes maestros.',
 '04 / Blog · First posts':'04 / Blog · Primeras publicaciones',
 'What a furnished floor plan helps you decide':'Qué ayuda a decidir un plano amueblado',
 'Compare two layouts with furniture at the same scale. A table may fit in both, but circulation changes when the chairs are in use. A furnished floor plan reveals the difference before you move on to a rendering.':'Compara dos distribuciones con el mobiliario a la misma escala. Una mesa puede caber en ambas, pero la circulación cambia cuando las sillas están en uso. Un plano amueblado muestra la diferencia antes de pasar a la perspectiva.',
 'How to choose the first camera angle for a façade':'Cómo elegir el primer ángulo de cámara para una fachada',
 'A street-level view shows how people approach a building. A higher view explains how it sits on the site. Start with the image that answers the most important question at that stage.':'Una vista a nivel de calle muestra cómo se llega al edificio. Una vista elevada explica cómo se implanta en el terreno. Empieza por la imagen que responda a la pregunta más importante en esa etapa.'
}));
const spanishWork=[
 ['Diseño arquitectónico','Desde la implantación hasta la definición de volúmenes, materiales y aberturas, el diseño vincula el programa con la manera de ocupar el lugar.'],
 ['Diseño de interiores','La distribución, la iluminación, el mobiliario y los materiales definen cómo funciona cada ambiente y cómo se percibe a lo largo del día.'],
 ['Perspectivas exteriores',''],['Perspectivas interiores',''],
 ['Planos amueblados','La vista superior muestra cómo encaja el mobiliario, cómo se conectan los ambientes y por dónde circulan las personas. Facilita la lectura a quienes no están familiarizados con los planos técnicos.'],
 ['Películas de arquitectura','El movimiento de cámara muestra recorridos y transiciones entre espacios. La luz, el montaje y el sonido ayudan a transmitir la experiencia del proyecto.'],
 ['Planes maestros','El modelo 3D integra edificios, vías, espacios abiertos y paisajismo. Las texturas distinguen las superficies y sus usos. La iluminación y el acabado hacen legible el conjunto en vistas aéreas y a nivel de calle.'],
 ['Modelado arquitectónico','Geometría de los edificios y su entorno construida a partir de planos y referencias, con el nivel de detalle que requiere cada vista y uso.'],
 ['Fotomontaje','Inserción de un modelo 3D en una fotografía real del lugar. Cámara, escala, perspectiva, luz y sombras ajustadas para mostrar cómo se integra la propuesta en su entorno.'],
 ['Modelado de objetos 3D','Modelado de mobiliario, equipamiento y elementos a medida para escenas 3D. La geometría y los materiales se preparan según la escala del objeto y su distancia a la cámara.'],
 ['Estands para ferias','Imágenes 3D de estands para ferias y eventos. Las perspectivas ayudan a evaluar la circulación, la visibilidad de la marca y la iluminación antes del montaje.'],
 ['Interactividad','Los recorridos virtuales y las experiencias interactivas permiten recorrer el proyecto al propio ritmo, elegir los ambientes y explorar los detalles antes de la obra.']
];
englishWork.forEach(([title,copy],i)=>{
 spanish.set(title,spanishWork[i][0]);
 if(copy)spanish.set(copy,spanishWork[i][1]);
});
function translateSpanish(english){
 if(spanish.has(english))return spanish.get(english);
 const numbered=english.match(/^((?:\d+|Portfolio) \/ )(.*)$/);
 if(numbered)return numbered[1].replace('Portfolio','Portafolio')+(spanish.get(numbered[2])||numbered[2]);
 return english.replace(/^(\d+) (films|images) · selection pending$/,(_,count,type)=>count+(type==='films'?' películas':' imágenes')+' · selección pendiente');
}
const translate=value=>{
 if(dictionary.has(value))return dictionary.get(value);
 const numbered=value.match(/^((?:\d+|Portfólio) \/ )(.*)$/);
 if(numbered)return numbered[1].replace('Portfólio','Portfolio')+(dictionary.get(numbered[2])||numbered[2]);
 return value.replace(/^(\d+) (filmes|imagens) · seleção do acervo pendente$/,(_,count,type)=>count+(type==='filmes'?' films':' images')+' · selection pending');
};
const permanent=[...document.querySelectorAll('nav a, footer small, footer a')].map(element=>[element,element.textContent]);
const requestedLanguage=new URLSearchParams(location.search).get('lang');
function preferredLanguage(){
 if(['pt','en','es'].includes(requestedLanguage))return requestedLanguage;
 try{
  const saved=localStorage.getItem('saulo-site-language');
  if(['pt','en','es'].includes(saved))return saved;
 }catch{}
 if(/^pt-BR$/i.test(navigator.language))return 'pt';
 return /^es(?:-|$)/i.test(navigator.language)?'es':'en';
}
let language=preferredLanguage();
const localized=value=>language==='pt'?value:language==='es'?translateSpanish(translate(value)):translate(value);
function applyLanguage(){
 document.documentElement.lang=language==='pt'?'pt-BR':language;
 permanent.forEach(([element,value])=>element.textContent=localized(value));
 document.querySelector('nav').setAttribute('aria-label',language==='en'?'Main menu':language==='es'?'Menú principal':'Menu principal');
 document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',button.dataset.lang===language));
 if(language!=='pt'){
  const walker=document.createTreeWalker(document.querySelector('main'),NodeFilter.SHOW_TEXT);
  while(walker.nextNode())walker.currentNode.nodeValue=localized(walker.currentNode.nodeValue);
 }
 document.title=(h=>h.children.length?[...h.children].map(c=>c.textContent).join(' '):h.textContent)(document.querySelector('main h1')).replace(/\s+/g,' ')+' | Saulo Morais';
}
document.querySelector('.languages').addEventListener('click',event=>{
 const button=event.target.closest('[data-lang]');
 if(!button||button.dataset.lang===language)return;
 language=button.dataset.lang;
 const url=new URL(location.href);
 url.searchParams.set('lang',language);
 try{localStorage.setItem('saulo-site-language',language)}catch{}
 try{history.replaceState(null,'',url)}catch{}
 const y=scrollY;
 navigate();
 window.scrollTo(0,y);
});
document.querySelector('main').addEventListener('pointermove',event=>{
 if(event.pointerType==='touch'||motion.matches)return;
 const stage=event.target.closest('.cover,.work-stage');
 if(stage){
  const rect=stage.getBoundingClientRect();
  stage.style.setProperty('--float-x',((event.clientX-rect.left)/rect.width-.5)*40+'px');
  stage.style.setProperty('--float-y',((event.clientY-rect.top)/rect.height-.5)*32+'px');
 }
 const tile=event.target.closest('.tile,.archviz-card');
 if(!tile)return;
 const box=tile.getBoundingClientRect();
 tile.style.setProperty('--x',((event.clientX-box.left)/box.width-.5)*22+'px');
 tile.style.setProperty('--y',((event.clientY-box.top)/box.height-.5)*22+'px');
});
document.querySelector('main').addEventListener('pointerout',event=>{
 const tile=event.target.closest('.tile,.archviz-card');
 if(tile&&!tile.contains(event.relatedTarget)){tile.style.removeProperty('--x');tile.style.removeProperty('--y')}
});
const mainStage=document.querySelector('main');
let deckGesture;
function rotateDeck(deck,direction){
 for(const frame of deck.children){
  frame.dataset.slot=(Number(frame.dataset.slot)+direction+3)%3;
 }
}
mainStage.addEventListener('pointerdown',event=>{
 const deck=event.target.closest('.cover-deck');
 if(!deck||event.button!==0||!event.isPrimary)return;
 deckGesture={deck,id:event.pointerId,x:event.clientX};
 deck.classList.add('dragging');
 deck.setPointerCapture(event.pointerId);
});
mainStage.addEventListener('pointermove',event=>{
 if(deckGesture?.id!==event.pointerId)return;
 const distance=Math.max(-150,Math.min(150,event.clientX-deckGesture.x));
 deckGesture.deck.style.setProperty('--drag-x',distance+'px');
});
function endDeckGesture(event){
 if(deckGesture?.id!==event.pointerId)return;
 const {deck,x}=deckGesture;
 deckGesture=undefined;
 deck.classList.remove('dragging');
 deck.style.removeProperty('--drag-x');
 const distance=event.clientX-x;
 if(event.type==='pointerup'&&Math.abs(distance)>=25)rotateDeck(deck,distance>0?1:-1);
}
mainStage.addEventListener('pointerup',endDeckGesture);
mainStage.addEventListener('pointercancel',endDeckGesture);
mainStage.addEventListener('lostpointercapture',endDeckGesture);
mainStage.addEventListener('keydown',event=>{
 if(!event.target.matches('.cover-deck')||!['ArrowLeft','ArrowRight'].includes(event.key))return;
 event.preventDefault();
 rotateDeck(event.target,event.key==='ArrowRight'?-1:1);
});
const motion=matchMedia('(prefers-reduced-motion: reduce)');
const observer=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
 if(isIntersecting){target.animate([{opacity:.2,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],{duration:620,delay:Number(target.dataset.revealDelay||0),fill:'backwards',easing:'cubic-bezier(.2,.7,.2,1)'});observer.unobserve(target)}
}),{threshold:.16});
const scrollMeter=document.querySelector('.scroll-meter');
let pendingFrame=0;
function paintScroll(){
 pendingFrame=0;
 const total=document.documentElement.scrollHeight-innerHeight;
 scrollMeter.style.scale=(total>0?Math.min(1,Math.max(0,scrollY/total)):0)+' 1';
 const cover=document.querySelector('.cover');
 if(cover&&!motion.matches){
  cover.style.setProperty('--drift',Math.min(64,Math.max(0,scrollY)*.15)+'px');
 }
}
function queueScrollPaint(){
 if(!pendingFrame)pendingFrame=requestAnimationFrame(paintScroll);
}
addEventListener('scroll',queueScrollPaint,{passive:true});
addEventListener('resize',queueScrollPaint);

/* ---------- Trabalhos: índice tipográfico interativo
   (referências: Locomotive = lista gigante com prévia no cursor;
    Elephant Skin = grade de pontos/partículas; Resn = imagem que reage ao mouse) ---------- */
const workDecks={
 projeto:()=>[covers.projeto,...(selections.arquitetura||[]).slice(0,3)],
 archviz:()=>[covers.archviz,...(selections.externas||[]).slice(0,2),...(selections.internas||[]).slice(0,2)],
 modelagem:()=>[covers.modelagem,...(selections['modelagem-arquitetura']||[]),...(selections.assets||[])]
};
function splitLetters(text){
 return [...text].map((ch,i)=>'<span class="ltr" style="--i:'+i+'" data-l="'+ch+'">'+ch+'</span>').join('');
}
function workIndex(){
 const still=motion.matches;
 const items=chapters.map(([id,title,label],i)=>{
  const deck=workDecks[id]().filter(key=>photos[key]!==undefined);
  return '<li><a class="work-item" href="#'+id+'" data-deck="'+deck.join(',')+'" aria-label="'+localized(title)+' — '+localized(label)+'">'+
   '<span class="work-num">0'+(i+1)+'</span>'+
   '<span class="work-word" aria-hidden="true">'+splitLetters(localized(title))+'</span>'+
   '<span class="work-sub">'+localized(label)+'</span>'+
   '<span class="work-thumb" aria-hidden="true">'+photo(deck[0])+'</span>'+
   '<span class="work-arrow" aria-hidden="true">↗</span></a></li>';
 }).join('');
 return '<section class="work-index">'+
  '<video class="work-film" muted loop playsinline preload="auto" poster="'+photos['film-22']+'"'+' aria-hidden="true"><source src="media/filme-22.mp4" type="video/mp4"></video>'+
  '<div class="work-shade" aria-hidden="true"></div><canvas class="work-dots" aria-hidden="true"></canvas>'+
  '<div class="work-inner"><div class="work-top"><div class="work-title"><h1 class="work-heading">Trabalhos</h1></div><p class="work-hint tag">'+localized('Do projeto de um espaço à imagem que permite percorrê-lo. Explore por disciplina.')+'</p></div>'+
  '<ol class="work-list">'+items+'</ol></div>'+

  '</section>';
}
let workLoop=0;
function initWorkIndex(){
 cancelAnimationFrame(workLoop);
 const stage=document.querySelector('main .work-index');
 if(!stage)return;
 const film=stage.querySelector('.work-film');
 if(film&&!motion.matches)smoothPlay(film);
 const canvas=stage.querySelector('.work-dots'),ctx=canvas.getContext('2d');
 const float=stage.querySelector('.work-float'),floatIn=float&&float.querySelector('.work-float-in'),floatLabel=float&&float.querySelector('.work-float-label');
 const dpr=Math.min(devicePixelRatio||1,2),gap=30;
 let W=0,H=0,mx=-999,my=-999,sx=-999,sy=-999,fx=0,fy=0,tx=0,ty=0,heat=0,hot=0,deckTimer=0,active=null;
 function size(){W=stage.clientWidth;H=stage.clientHeight;canvas.width=W*dpr;canvas.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
 size();new ResizeObserver(size).observe(stage);
 stage.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;tx=e.clientX;ty=e.clientY});
 stage.addEventListener('pointerleave',()=>{mx=my=-999});
 function setDeck(link){
  clearInterval(deckTimer);
  if(!float)return;
  const keys=link.dataset.deck.split(',').filter(Boolean);
  floatIn.innerHTML=keys.map((k,i)=>'<img src="'+photos[k]+'" alt="" class="'+(i===0?'on':'')+'">').join('');
  floatLabel.textContent=link.querySelector('.work-sub').textContent;
  let n=0;const imgs=floatIn.querySelectorAll('img');
  if(imgs.length>1&&!motion.matches)deckTimer=setInterval(()=>{imgs[n].classList.remove('on');n=(n+1)%imgs.length;imgs[n].classList.add('on')},900);
 }
 stage.querySelectorAll('.work-item').forEach(link=>{
  link.addEventListener('pointerenter',e=>{
   if(e.pointerType==='touch')return;
   active=link;hot=1;stage.classList.add('has-hover');
   stage.querySelectorAll('.work-item').forEach(other=>other.classList.toggle('is-dim',other!==link));
   if(float&&!float.classList.contains('on')){fx=tx=e.clientX;fy=ty=e.clientY}
   setDeck(link);if(float)float.classList.add('on');
  });
  link.addEventListener('pointerleave',()=>{
   active=null;hot=0;stage.classList.remove('has-hover');clearInterval(deckTimer);
   stage.querySelectorAll('.work-item').forEach(other=>other.classList.remove('is-dim'));
   if(float)float.classList.remove('on');
  });
 });
 function frame(t){
  if(!document.body.contains(stage))return;
  workLoop=requestAnimationFrame(frame);
  sx+=(mx-sx)*.12;sy+=(my-sy)*.12;heat+=(hot-heat)*.06;
  // prévia que segue o mouse com inclinação
  const vx=tx-fx;fx+=vx*.14;fy+=(ty-fy)*.14;
  if(float)float.style.transform='translate('+(fx+28)+'px,'+(fy-120)+'px) rotate('+Math.max(-12,Math.min(12,vx*.08))+'deg)';
  // grade de pontos (papel de desenho) que se afasta do cursor e ondula
  ctx.clearRect(0,0,W,H);
  const rad=180+heat*120,wave=t*.0016;
  for(let x=gap/2;x<W;x+=gap){for(let y=gap/2;y<H;y+=gap){
   const dx=x-sx,dy=y-sy,d=Math.hypot(dx,dy),f=d<rad?1-d/rad:0;
   const off=f*26+Math.sin(wave+(x+y)*.012)*heat*3;
   const px=x+(d?dx/d*off:0),py=y+(d?dy/d*off:0),s=1.1+f*2.6;
   ctx.fillStyle=f>0?'rgba(217,179,132,'+(.35+f*.65)+')':'rgba(248,247,243,'+(.12+heat*.08)+')';
   ctx.fillRect(px-s/2,py-s/2,s,s);
  }}
 }
 if(motion.matches){mx=my=-999;frame(0);cancelAnimationFrame(workLoop)}else workLoop=requestAnimationFrame(frame);
}

/* ---------- Filmes no fundo da abertura (referência: Binyan)
   Alterna a cabana (horizontal) e o Porto Real (vertical, com o carro na rua) com fusão. ---------- */
function landingFilm(){
 const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
 return '<div class="landing-reel" aria-hidden="true">'+
   '<div class="reel-clip is-on"><video class="reel-video" muted loop playsinline preload="auto" poster="'+photos['film-22']+'"><source src="media/filme-22.mp4" type="video/mp4"></video></div>'+
   // Para alternar com outro filme, acrescente aqui outro bloco reel-clip (ex.: Porto Real = media/filme-07.mp4, classe reel-tall).

  '</div><div class="landing-shade" aria-hidden="true"></div>'+
  '<button type="button" class="particle-toggle film-toggle" aria-pressed="'+(!still)+'">'+(still?'Retomar movimento':'Pausar movimento')+'</button>';
}
let reelState=null;
function initReel(autoplay){
 const reel=document.querySelector('main .landing-reel');
 if(!reel){reelState=null;return}
 const clips=[...reel.querySelectorAll('.reel-clip')];
 const state={clips,active:0,playing:false};
 reelState=state;
 function current(){return clips[state.active].querySelector('.reel-video')}
 function play(){smoothPlay(current());state.playing=true}
 function advance(){
  if(reelState!==state)return;
  const next=(state.active+1)%clips.length;
  const video=clips[next].querySelector('.reel-video');
  video.currentTime=0;
  clips[next].classList.add('is-on');
  clips[state.active].classList.remove('is-on');
  state.active=next;
  if(state.playing)play();
 }
 clips.forEach((clip,index)=>clip.querySelector('.reel-video').addEventListener('ended',()=>{if(index===state.active)advance()}));
 state.play=play;
 state.pause=()=>{current().pause();state.playing=false};
 if(autoplay)play();
}
document.querySelector('main').addEventListener('click',event=>{
 const button=event.target.closest('.film-toggle');
 if(!button||!reelState)return;
 if(!reelState.playing){reelState.play();button.setAttribute('aria-pressed','true');button.textContent=localized('Pausar movimento')}
 else{reelState.pause();button.setAttribute('aria-pressed','false');button.textContent=localized('Retomar movimento')}
});

/* ---------- Texto que se decodifica (referência: Locomotive) ---------- */
const glyphs='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#%&*+=';
function decode(element,duration=1100){
 const finalText=element.textContent;
 if(!finalText.trim()||motion.matches)return;
 element.setAttribute('aria-label',finalText);
 const start=performance.now();
 (function frame(now){
  const progress=Math.min((now-start)/duration,1);
  let out='';
  for(let i=0;i<finalText.length;i++){
   const ch=finalText[i];
   out+=(ch===' '||ch==='·'||i/finalText.length<progress)?ch:glyphs[(Math.random()*glyphs.length)|0];
  }
  element.textContent=out;
  if(progress<1)requestAnimationFrame(frame);else element.textContent=finalText;
 })(start);
}

/* ---------- Ampliar imagens da galeria (lightbox) ---------- */
const viewer=document.createElement('dialog');
viewer.className='viewer';
viewer.innerHTML='<div class="viewer-bar"><span class="viewer-count"></span><button type="button" class="viewer-close">Fechar ×</button></div>'+
 '<img class="viewer-image" alt=""><button type="button" class="viewer-nav viewer-prev" aria-label="Anterior">←</button><button type="button" class="viewer-nav viewer-next" aria-label="Próxima">→</button>';
document.body.appendChild(viewer);
let viewerList=[],viewerIndex=0;
function showViewer(index){
 viewerIndex=(index+viewerList.length)%viewerList.length;
 const image=viewerList[viewerIndex];
 const big=viewer.querySelector('.viewer-image');
 big.src=image.dataset.full||image.currentSrc||image.src; big.alt=image.alt;
 viewer.querySelector('.viewer-count').textContent=(viewerIndex+1)+' / '+viewerList.length;
 if(!viewer.open)viewer.showModal();
}
viewer.querySelector('.viewer-close').addEventListener('click',()=>viewer.close());
viewer.querySelector('.viewer-prev').addEventListener('click',()=>showViewer(viewerIndex-1));
viewer.querySelector('.viewer-next').addEventListener('click',()=>showViewer(viewerIndex+1));
viewer.addEventListener('click',event=>{if(event.target===viewer)viewer.close()});
viewer.addEventListener('keydown',event=>{
 if(event.key==='ArrowRight')showViewer(viewerIndex+1);
 if(event.key==='ArrowLeft')showViewer(viewerIndex-1);
});
document.querySelector('main').addEventListener('click',event=>{
 const image=event.target.closest('.gallery-photo');
 if(!image)return;
 viewerList=[...document.querySelectorAll('main .gallery-photo')];
 showViewer(viewerList.indexOf(image));
});
document.querySelector('main').addEventListener('keydown',event=>{
 if((event.key==='Enter'||event.key===' ')&&event.target.matches('.gallery-photo')){event.preventDefault();event.target.click()}
});

function navigate({shared=false}={}){
 observer.disconnect();
 if(viewer.open)viewer.close();
 render();
 applyLanguage();
 viewer.querySelector('.viewer-close').textContent=localized('Fechar ×');
 initWorkIndex();
 const pageVideo=document.querySelector('main .page-film');
 if(pageVideo&&!motion.matches)smoothPlay(pageVideo);
 initReel(!motion.matches);
 document.querySelectorAll('main .gallery-photo').forEach(image=>{image.tabIndex=0;image.setAttribute('role','button')});
 document.querySelectorAll('main .landing-kicker, main .tag, main .work-stage .tile-title small').forEach((element,index)=>setTimeout(()=>decode(element),index*120));
 queueScrollPaint();
 if(!motion.matches){
  document.querySelectorAll('.tile,.story,.chapter,.article,.split > div,.archviz-card,.gallery-photo').forEach((node,index)=>{
   node.dataset.revealDelay=String((index%3)*75);
   if(!node.closest('.home .work-stage'))observer.observe(node);
  });
  if(!shared)document.querySelector('main').animate([{opacity:.45,translate:'0 12px'},{opacity:1,translate:'0 0'}],{duration:460,easing:'cubic-bezier(.2,.75,.25,1)'});
 }
}
document.querySelector('main').addEventListener('click',event=>{
 const tile=event.target.closest('.work-stage .tile.archviz');
 if(!tile||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
 if(motion.matches||!document.startViewTransition)return;
 try{history.pushState(null,'',tile.href)}catch{return}
 event.preventDefault();
 document.startViewTransition(()=>navigate({shared:true}));
});
addEventListener('hashchange',navigate);
navigate();
