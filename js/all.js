// 連接api 並建立alldata變數儲存從api請求回來的資料
var alldata;
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://data.epa.gov.tw/api/v1/wr_p_13?offset=0&limit=1000&api_key=9b333cd1-70b5-4408-94d3-c0387c0999b5', true);
xhr.send(null);
xhr.onload = function() {
    if(xhr.status !== 200){return;};
    var data = JSON.parse(xhr.responseText);
    alldata = data.records;
    updataMenu();
    console.log(alldata);
    
}



// 在載入網頁時 就要準備好下拉式選單的選項
// 輸入 alldata
// 輸出 option
var noRepeatYear;
function updataMenu(){
	// 先把所有alldata.Year撈出來
	var allList = [];
	for(var i=0;i<alldata.length;i++){
		allList.push(alldata[i].Year);
	}
    

    noRepeatYear = Array.from(new Set(allList));
    // 將資料撈出 去除重複的項目，重新組成一個陣列
    noRepeatYear.sort(function(a,b){
    	return b - a;
    });
    // 將年份做 降序 排列

    // console.log(noRepeatYear);

    var str = '';
    str += `<option value="請選擇年度回收" selected>年度回收資訊</option>`;
    for(var i=0;i<noRepeatYear.length;i++){
    	str += `<option value="${noRepeatYear[i]}">${noRepeatYear[i]}</option>`;
    }
    document.querySelector('.yearRecycle').innerHTML = str;

}


// 建立內容區塊
// 輸入 選單的選項  輸出 content
var option = document.querySelector('.yearRecycle');
var content = document.querySelector('.content');
option.addEventListener('change', updataContent);

function updataContent(e){
	var select = e.target.value || e.target.textContent;
	// 點選下拉式選單的值
	var contentStr = ''; //輸出的值
	for(var i=0;i<alldata.length;i++){
		if(select == alldata[i].Year){
			contentStr += `<div class="recycleList">
                    <p>年份<span>${alldata[i].Year}</span>數量<span>${alldata[i].Amount}</span><span>${alldata[i].ItemName}</span></p>
                </div>`
		}
	}
	content.innerHTML = contentStr;
}























// var data = [{
//         "Year": "102",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "499311688"
//     },
//     {
//         "Year": "102",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "4774819"
//     },
//     {
//         "Year": "102",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "1105061"
//     },
//     {
//         "Year": "102",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "327005"
//     },
//     {
//         "Year": "102",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "53655434"
//     },
//     {
//         "Year": "102",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "106808725"
//     },
//     {
//         "Year": "102",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "-"
//     },
//     {
//         "Year": "102",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "5415605"
//     },
//     {
//         "Year": "101",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "498588523"
//     },
//     {
//         "Year": "101",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "4958898"
//     },
//     {
//         "Year": "101",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "134570"
//     },
//     {
//         "Year": "101",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "297722"
//     },
//     {
//         "Year": "101",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "51240802"
//     },
//     {
//         "Year": "101",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "104775883"
//     },
//     {
//         "Year": "101",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "-"
//     },
//     {
//         "Year": "101",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "7213035"
//     },
//     {
//         "Year": "100",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "520870855"
//     },
//     {
//         "Year": "100",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "3314775"
//     },
//     {
//         "Year": "100",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "369454"
//     },
//     {
//         "Year": "100",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "337400"
//     },
//     {
//         "Year": "100",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "52126198"
//     },
//     {
//         "Year": "100",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "103292189"
//     },
//     {
//         "Year": "100",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "15290081"
//     },
//     {
//         "Year": "100",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "5219720"
//     },
//     {
//         "Year": "99",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "476625293"
//     },
//     {
//         "Year": "99",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "3616651"
//     },
//     {
//         "Year": "99",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "607736"
//     },
//     {
//         "Year": "99",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "469256"
//     },
//     {
//         "Year": "99",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "37907850"
//     },
//     {
//         "Year": "99",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "103029747"
//     },
//     {
//         "Year": "99",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "29343990"
//     },
//     {
//         "Year": "99",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "5052728"
//     },
//     {
//         "Year": "98",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "473981505"
//     },
//     {
//         "Year": "98",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "4095903"
//     },
//     {
//         "Year": "98",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "789583"
//     },
//     {
//         "Year": "98",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "438411"
//     },
//     {
//         "Year": "98",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "25593624"
//     },
//     {
//         "Year": "98",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "102930700"
//     },
//     {
//         "Year": "98",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "29561336"
//     },
//     {
//         "Year": "98",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "4694578"
//     },
//     {
//         "Year": "97",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "433685994"
//     },
//     {
//         "Year": "97",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "5470416"
//     },
//     {
//         "Year": "97",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "994819"
//     },
//     {
//         "Year": "97",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "514806"
//     },
//     {
//         "Year": "97",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "38661939"
//     },
//     {
//         "Year": "97",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "104833740"
//     },
//     {
//         "Year": "97",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "27439270"
//     },
//     {
//         "Year": "97",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "5121063"
//     },
//     {
//         "Year": "96",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "443633254"
//     },
//     {
//         "Year": "96",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "2387866"
//     },
//     {
//         "Year": "96",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "1101283"
//     },
//     {
//         "Year": "96",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "534120"
//     },
//     {
//         "Year": "96",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "35278505"
//     },
//     {
//         "Year": "96",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "107420781"
//     },
//     {
//         "Year": "96",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "22381083"
//     },
//     {
//         "Year": "96",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "4557818"
//     },
//     {
//         "Year": "95",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "413393446"
//     },
//     {
//         "Year": "95",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "4289493"
//     },
//     {
//         "Year": "95",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "1074164"
//     },
//     {
//         "Year": "95",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "577714"
//     },
//     {
//         "Year": "95",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "44602881"
//     },
//     {
//         "Year": "95",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "103494760"
//     },
//     {
//         "Year": "95",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "16676364"
//     },
//     {
//         "Year": "95",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "4736784"
//     },
//     {
//         "Year": "94",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "336195604"
//     },
//     {
//         "Year": "94",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "2177218"
//     },
//     {
//         "Year": "94",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "887779"
//     },
//     {
//         "Year": "94",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "493148"
//     },
//     {
//         "Year": "94",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "38390203"
//     },
//     {
//         "Year": "94",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "103053525"
//     },
//     {
//         "Year": "94",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "14437080"
//     },
//     {
//         "Year": "94",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "4675873"
//     },
//     {
//         "Year": "93",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "351862052"
//     },
//     {
//         "Year": "93",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "1363568"
//     },
//     {
//         "Year": "93",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "1123285"
//     },
//     {
//         "Year": "93",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "415767"
//     },
//     {
//         "Year": "93",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "37738839"
//     },
//     {
//         "Year": "93",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "107190754"
//     },
//     {
//         "Year": "93",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "13324648"
//     },
//     {
//         "Year": "93",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "4363711"
//     },
//     {
//         "Year": "92",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "356909132"
//     },
//     {
//         "Year": "92",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "1016562"
//     },
//     {
//         "Year": "92",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "1004430"
//     },
//     {
//         "Year": "92",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "325543"
//     },
//     {
//         "Year": "92",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "41778207"
//     },
//     {
//         "Year": "92",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "120541496"
//     },
//     {
//         "Year": "92",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "9008457"
//     },
//     {
//         "Year": "92",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "7891706"
//     },
//     {
//         "Year": "91",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "280959152"
//     },
//     {
//         "Year": "91",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "922632"
//     },
//     {
//         "Year": "91",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "960952"
//     },
//     {
//         "Year": "91",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "542594"
//     },
//     {
//         "Year": "91",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "32855862"
//     },
//     {
//         "Year": "91",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "103747228"
//     },
//     {
//         "Year": "91",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "9413072"
//     },
//     {
//         "Year": "91",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "523500"
//     },
//     {
//         "Year": "90",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "245298818"
//     },
//     {
//         "Year": "90",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "585808"
//     },
//     {
//         "Year": "90",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "886051"
//     },
//     {
//         "Year": "90",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "530351"
//     },
//     {
//         "Year": "90",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "36580896"
//     },
//     {
//         "Year": "90",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "119034446"
//     },
//     {
//         "Year": "90",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "12328261"
//     },
//     {
//         "Year": "90",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "-"
//     },
//     {
//         "Year": "89",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "225947110"
//     },
//     {
//         "Year": "89",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "632099"
//     },
//     {
//         "Year": "89",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "737707"
//     },
//     {
//         "Year": "89",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "503702"
//     },
//     {
//         "Year": "89",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "31688269"
//     },
//     {
//         "Year": "89",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "100282527"
//     },
//     {
//         "Year": "89",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "11996340"
//     },
//     {
//         "Year": "89",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "-"
//     },
//     {
//         "Year": "88",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "187263919"
//     },
//     {
//         "Year": "88",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "256684"
//     },
//     {
//         "Year": "88",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "665239"
//     },
//     {
//         "Year": "88",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "533761"
//     },
//     {
//         "Year": "88",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "30334316"
//     },
//     {
//         "Year": "88",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "94647603"
//     },
//     {
//         "Year": "88",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "13023086"
//     },
//     {
//         "Year": "88",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "-"
//     },
//     {
//         "Year": "87",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "126668008"
//     },
//     {
//         "Year": "87",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "13514"
//     },
//     {
//         "Year": "87",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "620043"
//     },
//     {
//         "Year": "87",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "186638"
//     },
//     {
//         "Year": "87",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "26285710"
//     },
//     {
//         "Year": "87",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "56630061"
//     },
//     {
//         "Year": "87",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "8008169"
//     },
//     {
//         "Year": "87",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "-"
//     },
//     {
//         "Year": "86",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "19360263"
//     },
//     {
//         "Year": "86",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "-"
//     },
//     {
//         "Year": "86",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "228047"
//     },
//     {
//         "Year": "86",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "399501"
//     },
//     {
//         "Year": "86",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "13964244"
//     },
//     {
//         "Year": "86",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "51224316"
//     },
//     {
//         "Year": "86",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "-"
//     },
//     {
//         "Year": "86",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "-"
//     },
//     {
//         "Year": "103",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "499280945"
//     },
//     {
//         "Year": "103",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "3731038"
//     },
//     {
//         "Year": "103",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "1921212"
//     },
//     {
//         "Year": "103",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "353293"
//     },
//     {
//         "Year": "103",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "68659842"
//     },
//     {
//         "Year": "103",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "117255731"
//     },
//     {
//         "Year": "103",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "-"
//     },
//     {
//         "Year": "103",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "5182100"
//     },
//     {
//         "Year": "104",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "476467020"
//     },
//     {
//         "Year": "104",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "4414237"
//     },
//     {
//         "Year": "104",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "1009503"
//     },
//     {
//         "Year": "104",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "359546"
//     },
//     {
//         "Year": "104",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "69796647"
//     },
//     {
//         "Year": "104",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "120770957"
//     },
//     {
//         "Year": "104",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "-"
//     },
//     {
//         "Year": "104",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "5082177"
//     },
//     {
//         "Year": "105",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "4692933"
//     },
//     {
//         "Year": "105",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "-"
//     },
//     {
//         "Year": "105",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "121096603"
//     },
//     {
//         "Year": "105",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "73449044"
//     },
//     {
//         "Year": "105",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "730658"
//     },
//     {
//         "Year": "105",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "885105"
//     },
//     {
//         "Year": "105",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "4128436"
//     },
//     {
//         "Year": "105",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "462359443"
//     },
//     {
//         "Year": "106",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "486436391"
//     },
//     {
//         "Year": "106",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "3745233"
//     },
//     {
//         "Year": "106",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "1272559"
//     },
//     {
//         "Year": "106",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "1000513"
//     },
//     {
//         "Year": "106",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "73747454"
//     },
//     {
//         "Year": "106",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "142837186"
//     },
//     {
//         "Year": "106",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "-"
//     },
//     {
//         "Year": "106",
//         "ItemName": "廢電子電器(公斤)",
//         "Amount": "120418428"
//     },
//     {
//         "Year": "106",
//         "ItemName": "廢資訊物品(公斤)",
//         "Amount": "17051080"
//     },
//     {
//         "Year": "106",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "4361070"
//     },
//     {
//         "Year": "105",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "2565141"
//     },
//     {
//         "Year": "105",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "2918817"
//     },
//     {
//         "Year": "104",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "3683529"
//     },
//     {
//         "Year": "104",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "2653478"
//     },
//     {
//         "Year": "103",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "3843565"
//     },
//     {
//         "Year": "103",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "2627279"
//     },
//     {
//         "Year": "102",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "3134613"
//     },
//     {
//         "Year": "102",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "2621151"
//     },
//     {
//         "Year": "101",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "3387706"
//     },
//     {
//         "Year": "101",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "2454803"
//     },
//     {
//         "Year": "100",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "3869361"
//     },
//     {
//         "Year": "100",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "1936644"
//     },
//     {
//         "Year": "99",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "3553705"
//     },
//     {
//         "Year": "99",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "1786036"
//     },
//     {
//         "Year": "98",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "2569973"
//     },
//     {
//         "Year": "98",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "1426584"
//     },
//     {
//         "Year": "97",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "2779947"
//     },
//     {
//         "Year": "97",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "1473928"
//     },
//     {
//         "Year": "96",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "2294513"
//     },
//     {
//         "Year": "96",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "1637341"
//     },
//     {
//         "Year": "95",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "2142047"
//     },
//     {
//         "Year": "95",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "1465409"
//     },
//     {
//         "Year": "94",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "2006930"
//     },
//     {
//         "Year": "94",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "1463998"
//     },
//     {
//         "Year": "93",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "1930054"
//     },
//     {
//         "Year": "93",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "1285343"
//     },
//     {
//         "Year": "92",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "1819883"
//     },
//     {
//         "Year": "92",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "1283213"
//     },
//     {
//         "Year": "91",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "1701337"
//     },
//     {
//         "Year": "91",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "1300235"
//     },
//     {
//         "Year": "90",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "1247946"
//     },
//     {
//         "Year": "90",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "1848757"
//     },
//     {
//         "Year": "89",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "946518"
//     },
//     {
//         "Year": "89",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "985548"
//     },
//     {
//         "Year": "88",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "485975"
//     },
//     {
//         "Year": "88",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "1155270"
//     },
//     {
//         "Year": "87",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "138528"
//     },
//     {
//         "Year": "87",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "416413"
//     },
//     {
//         "Year": "86",
//         "ItemName": "廢資訊物品(台)",
//         "Amount": "-"
//     },
//     {
//         "Year": "86",
//         "ItemName": "廢電子電器(台)",
//         "Amount": "-"
//     },
//     {
//         "Year": "107",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "4554761"
//     },
//     {
//         "Year": "107",
//         "ItemName": "廢資訊物品(公斤)",
//         "Amount": "16459927"
//     },
//     {
//         "Year": "107",
//         "ItemName": "廢電子電器(公斤)",
//         "Amount": "127236726"
//     },
//     {
//         "Year": "107",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "-"
//     },
//     {
//         "Year": "107",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "149914278"
//     },
//     {
//         "Year": "107",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "75689615"
//     },
//     {
//         "Year": "107",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "1130956"
//     },
//     {
//         "Year": "107",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "1202439"
//     },
//     {
//         "Year": "107",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "4017251"
//     },
//     {
//         "Year": "107",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "496814201"
//     },
//     {
//         "Year": "108",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "4886187"
//     },
//     {
//         "Year": "108",
//         "ItemName": "廢資訊物品(公斤)",
//         "Amount": "16605227"
//     },
//     {
//         "Year": "108",
//         "ItemName": "廢電子電器(公斤)",
//         "Amount": "125177442"
//     },
//     {
//         "Year": "108",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "-"
//     },
//     {
//         "Year": "108",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "145871610"
//     },
//     {
//         "Year": "108",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "68125340"
//     },
//     {
//         "Year": "108",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "967369"
//     },
//     {
//         "Year": "108",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "1504216"
//     },
//     {
//         "Year": "108",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "3727086"
//     },
//     {
//         "Year": "108",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "569205863"
//     },
//     {
//         "Year": "109",
//         "ItemName": "廢照明光源(公斤)",
//         "Amount": "3741579"
//     },
//     {
//         "Year": "109",
//         "ItemName": "廢資訊物品(公斤)",
//         "Amount": "17242067"
//     },
//     {
//         "Year": "109",
//         "ItemName": "廢電子電器(公斤)",
//         "Amount": "132851583"
//     },
//     {
//         "Year": "109",
//         "ItemName": "廢潤滑油(公升)",
//         "Amount": "-"
//     },
//     {
//         "Year": "109",
//         "ItemName": "廢輪胎(公斤)",
//         "Amount": "149798822"
//     },
//     {
//         "Year": "109",
//         "ItemName": "廢鉛蓄電池(公斤)",
//         "Amount": "62093390"
//     },
//     {
//         "Year": "109",
//         "ItemName": "廢機動車輛(輛)",
//         "Amount": "1044280"
//     },
//     {
//         "Year": "109",
//         "ItemName": "廢農藥容器(公斤)",
//         "Amount": "1638307"
//     },
//     {
//         "Year": "109",
//         "ItemName": "廢乾電池(公斤)",
//         "Amount": "4074487"
//     },
//     {
//         "Year": "109",
//         "ItemName": "廢容器(公斤)",
//         "Amount": "632722693"
//     }
// ];



