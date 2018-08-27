
myFunction()

function myFunction() {
    const d = document.createElement('div');
    d.className="page-layout";

    const div = document.createElement('div');
    div.className="main-field";
    var h = document.createElement("H1");
    var t = document.createTextNode("Ivan Sharafanovich");
    h.appendChild(t);
    div.appendChild(h);


   const divpp = document.createElement('div');
    var img = document.createElement("img");
    divpp.className="personal-photo";
    img.src = "img/epam.jpg";
    divpp.appendChild(img);
    div.appendChild(divpp);

    const divpi = document.createElement('div');
    divpi.className="personal-information";
    divpi.id="pers-info";

    var p1 = document.createElement('p');
    p1.innerText = 'Day of Birth:';
    var p2 = document.createElement('p');
    p2.innerText = '09 September 1998';
    var p3 = document.createElement('p');
    p3.innerText = 'Sex:';
    var p4 = document.createElement('p');
    p4.innerText = 'Male';
    var p5 = document.createElement('p');
    p5.innerText = 'Marital status:';
    var p6 = document.createElement('p');
    p6.innerText = 'Single';

    divpi.appendChild(p1);
    divpi.appendChild(p2);
    divpi.appendChild(p3);
    divpi.appendChild(p4);
    divpi.appendChild(p5);
    divpi.appendChild(p6);
    div.appendChild(divpi);




    const dived = document.createElement('div');
    //dived.className = 'main-field h2';
    dived.className="Education";
    var hed = document.createElement("h2");
    var ted = document.createTextNode("Education");
    hed.appendChild(ted);
    dived.appendChild(hed);




    var TABLEed = document.createElement("TABLE");
    TABLEed.id="t01";
    var tblBody = document.createElement("tbody");
    var tr1 = document.createElement("TR");

    var th1 = document.createElement("TH");
    var t1 = document.createTextNode("Institution");
    th1.appendChild(t1);
    tr1.appendChild(th1);

    var th2 = document.createElement("TH");
    var t2 = document.createTextNode("Degree");
    th2.appendChild(t2);
    tr1.appendChild(th2);

    var th3 = document.createElement("TH");
    var t3 = document.createTextNode("Graduation year");
    th3.appendChild(t3);
    tr1.appendChild(th3);

    tblBody.appendChild(tr1);

    var tr2 = document.createElement("TR");

    var th1 = document.createElement("TH");
    var t1 = document.createTextNode("School");
    th1.appendChild(t1);
    tr2.appendChild(th1);

    var th2 = document.createElement("TH");
    var t2 = document.createTextNode("General secondary education");
    th2.appendChild(t2);
    tr2.appendChild(th2);

    var th3 = document.createElement("TH");
    var t3 = document.createTextNode("2016");
    th3.appendChild(t3);
    tr2.appendChild(th3);

    tblBody.appendChild(tr2);

    var tr3 = document.createElement("TR");

    var th1 = document.createElement("TH");
    var t1 = document.createTextNode("Belarussian University of informatics and radio electronics");
    th1.appendChild(t1);
    tr3.appendChild(th1);

    var th2 = document.createElement("TH");
    var t2 = document.createTextNode("Bacalavr");
    th2.appendChild(t2);
    tr3.appendChild(th2);

    var th3 = document.createElement("TH");
    var t3 = document.createTextNode("2020");
    th3.appendChild(t3);
    tr3.appendChild(th3);

    tblBody.appendChild(tr3);

    TABLEed.appendChild(tblBody);
    dived.appendChild(TABLEed);

    div.appendChild(dived);


    const divex = document.createElement('div');
    //dived.className = 'main-field h2';
    divex.className="Education";
    var hed = document.createElement("h2");
    var ted = document.createTextNode("Extra education");
    hed.appendChild(ted);
    divex.appendChild(hed);


    var TABLEex = document.createElement("TABLE");
    TABLEex.id="t01";
    var tblBody1 = document.createElement("tbody");

    var trex1 = document.createElement("TR");

    var thex1 = document.createElement("TH");
    var tex1 = document.createTextNode("Year");
    thex1.appendChild(tex1);
    trex1.appendChild(thex1);

    var thex2 = document.createElement("TH");
    var tex2 = document.createTextNode("Discipline");
    thex2.appendChild(tex2);
    trex1.appendChild(thex2);

    var thex3 = document.createElement("TH");
    var tex3 = document.createTextNode("institution");
    thex3.appendChild(tex3);
    trex1.appendChild(thex3);

    tblBody1.appendChild(trex1);

    var trex2 = document.createElement("TR");

    var thex1 = document.createElement("TH");
    var tex1 = document.createTextNode("2016-2017");
    thex1.appendChild(tex1);
    trex2.appendChild(thex1);

    var thex2 = document.createElement("TH");
    var tex2 = document.createTextNode("English");
    thex2.appendChild(tex2);
    trex2.appendChild(thex2);

    var thex3 = document.createElement("TH");
    var tex3 = document.createTextNode("Streamline");
    thex3.appendChild(tex3);
    trex2.appendChild(thex3);

    tblBody1.appendChild(trex2);

    var trex3 = document.createElement("TR");

    var thex1 = document.createElement("TH");
    var tex1 = document.createTextNode("2018");
    thex1.appendChild(tex1);
    trex3.appendChild(thex1);

    var thex2 = document.createElement("TH");
    var tex2 = document.createTextNode("Sap");
    thex2.appendChild(tex2);
    trex3.appendChild(thex2);

    var thex3 = document.createElement("TH");
    var tex3 = document.createTextNode("Epam Systems");
    thex3.appendChild(tex3);
    trex3.appendChild(thex3);

    tblBody1.appendChild(trex3);

    TABLEex.appendChild(tblBody1);
    divex.appendChild(TABLEex);

    div.appendChild(divex);


    const divco = document.createElement('div');
    //dived.className = 'main-field h2';
    divco.className="Contacts";
    var hed = document.createElement("h2");
    var ted = document.createTextNode("Contacts");
    hed.appendChild(ted);
    divco.appendChild(hed);

    var navbarlink1 = document.createElement('a');
    navbarlink1.href = ('https://vk.com/ivshar');
    navbarlink1.innerText = 'Personal Information';

    var btn = document.createElement("BUTTON");
    var img = document.createElement("img");
    img.src = "img/200px-VK.com-logo.svg.png";
    btn.appendChild(img);

    navbarlink1.appendChild(btn);
  divco.appendChild(navbarlink1);
    div.appendChild(divco);


    d.appendChild(div);
    document.body.appendChild(d);
}
