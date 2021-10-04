let score=0;

questions=["В Таблице Менделеева Серебро Обозначается Как Ar.","В Древнегреческой Мифологии Герас - Это Бог Старости."
,"Хлоропласты - Это То, С Помощью Чего Осуществляется Фотосинтез.",
"Пьют Кровь Только Самки Комаров."," Оливки И Маслины - Это Плоды Одного И Того Же Дерева.","Помидор - Это Ягода.",
"Самое Высокое Здание В Мире - Шанхайская Башня."," Пабло Пикассо Был Настолько Беден, Что Сжигал Свои Картины, Чтобы Согреться.",
"JavaScript создали в 1994 году.","Есть ли фреймворк thanos.js"];
href=["https://pikuco.ru/upload/test_stable/173/173e6a7d444f02f2a13bcb293080c8a0.jpg","https://pikuco.ru/upload/test_stable/b7e/b7eac4cd43669813b5cca54498f49aa4.jpg"
,"https://pikuco.ru/upload/test_stable/696/69609d143bf0628688aef737b459ab47.jpg","https://pikuco.ru/upload/test_stable/472/472c7e07a2059cca3d158a0a0dd50a3c.jpg"
,"https://pikuco.ru/upload/test_stable/990/99068de9a605c146dd3f89e03831ae08.jpg","https://pikuco.ru/upload/test_stable/659/659333ff501ccee3a4ab04cc97b0aea5.jpg",
"https://pikuco.ru/upload/test_stable/c76/c764b1642ba0c72e056fce73f7a22a2f.jpg","https://pikuco.ru/upload/test_stable/7e5/7e5ccb837b8974b4c61ddafc92f73bcf.jpg",
"https://mywishboard.com/thumbs/wish/k/q/j/1020x0_tiyybunfeqaxkmtg_jpg_4fc2.jpg","https://www.deepcrawl.com/wp-content/uploads/2019/07/javascript-frameworks.png"];
answers=["NO","YES","YES","YES","YES","YES","NO","YES","NO","YES"];
let i=0

let question=document.getElementById("question");
question.innerHTML=questions[i];
let img =document.getElementById("image");
img.src=href[i];


function getAnswer(btn_value){
	let answer=btn_value
	if (answer==answers[i]){
		score++;
		i++;
		}else{
		i++;
		}
		let question=document.getElementById("question");
		question.innerHTML=questions[i];
		let img =document.getElementById("image");
		img.src=href[i];
		
		if (i==answers.length){
			alert("Игра окончена \n Всего вопросов "+answers.length+" \n Очков набрано "+score);
		
	}
	
	
}


