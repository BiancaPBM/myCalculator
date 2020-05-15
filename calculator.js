function addNumber(number){
    var result = document.getElementById("result-label");
    if(result.innerText == '0')
    {
        result.innerText = number;
    }
    else
    {
        result.innerText = result.innerText + number;
    }

}

function modifyNumber(id)
{
    var result = document.getElementById("result-label");
    if( id == 'plus')
      {
        result.innerText += ' + ';
      }  
    else if(id == 'minus')
    {
        result.innerText += ' - ';

    }
    else if(id == 'factor')
    {
        result.innerText += ' * ';

    }
    else if(id == 'divide')
    {
        result.innerText += ' / ';

    }
    else if(id == 'clear')
    {
        result.innerText = '0';
    }   
}

function calculateTotal()
{
    var result = document.getElementById("result-label");
    var resultatPlus = result.innerText.split('+');
    var divide = [];
    var factor = [];
    var extract= [];
    var finalSum;
    for(var i = 0; i< resultatPlus.length; i++)
    {
      resultatPlus[i] = resultatPlus[i].split('-');
      for(var j = 0; j < resultatPlus[i].length; j++)
      {
          resultatPlus[i][j] = resultatPlus[i][j].split('*');
          for(var k = 0; k < resultatPlus[i][j].length; k++)
          {
            resultatPlus[i][j][k] = resultatPlus[i][j][k].split('/');
            divide = resultatPlus[i][j][k];
            finalSum = 1;
            if(divide.length > 1)
            {
                finalSum = parseInt(divide[0].trim());
                for(var m = 1 ; m < divide.length; m++)
                finalSum = finalSum / parseInt(divide[m].trim());
                resultatPlus[i][j][k]=finalSum;
            }
          
          }

          factor = resultatPlus[i][j];
          finalSum = 1;
          for(var m = 0; m < factor.length; m++)
          {
              finalSum = finalSum * factor[m];
          }
          resultatPlus[i][j] = finalSum;
      }
      extract = resultatPlus[i];
      if(extract.length > 1)
      {
        finalSum = parseInt(extract[0]);
      
        for(var m = 1; m < extract.length; m++)
          {
              finalSum = finalSum - extract[m];
          }
        resultatPlus[i] = finalSum;
      }
}
var totalSum = 0;
for(var i = 0; i < resultatPlus.length; i++)
{
 if( resultatPlus[i].length != undefined)
    totalSum = totalSum + resultatPlus[i][0];
 else totalSum = totalSum + resultatPlus[i];

}
result.innerText = totalSum.toString();
}