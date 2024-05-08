export function whitespace(t)
{
   return t.trim();
}
export function vowels(t)
{
    let v = 0;
    for (let index = 0; index < t.length; index++) {
        if (t[index]=='a'||t[index]=='e'||t[index]=='i'||t[index]=='o'||t[index]=='u'||t[index]=='A'||t[index]=='E'||t[index]=='I'||t[index]=='O'||t[index]=='U') {
            v++; 
        }    
    }
    return v;
}
export function maskingString(str, start, end) {
    if (!str || start < 0 || start >= str.length || end < 0 || end > str.length || start >= end) {
       return str;
    }
    const maskLength = end - start;
    const maskedStr = str.substring(0, start) + "*".repeat(maskLength) + str.substring(end);
    return maskedStr;
 }

export function pallin(t)
{
   let c=t.length;
   for (let i = 0; i < c/2; i++) {
       if(t[i]!=t[c-1-i])
        {
            return "not pallindrome";
        }
        return "is pallindrome";
    
   }
}
export function truncate(a,m)
{
   if(a.length>m)
    {
        return a.slice(0,m) + "...";
    }
    return a;
}
export function capital(t)
{
    let r=t.split(" ");
    r=r.map(item=>{
        return item[0].toUpperCase() + item.slice(1).toLowerCase();
    })
    return r.join(" ");
}
export function check(t)
{
    const r=t.split(" ");
    let v=0; 
    for (let index = 0; index < r.length; index++) {
        if(r[index]=="xyz")
            {
               v++;
            }
           
    }
    if(v>=1)
        {
            return true;
        }
        return false;
}
export function occur(t)
{
    const r=t.split(" ");
    let v=0; 
    for (let index = 0; index < r.length; index++) {
        if(r[index]=="xyz")
            {
               v++;
            }
           
    }
    return v;
}
export function mail(t)
{
    const r=t.split("@");
    if(r[1]=="gmail.com")
        {
            return true;
        }
        return false;
    
}
export function rev(t)
{
    const s=[];
    let l=t.length;
    for(let i=0;i<l;i++)
        {
            s[i]=t[l-1-i];
        }
    let v= s.join("");
    return v;
}
export function dens(t)
{
    const r=t.split(" ");
    let v=0;
    for(let i=0;i<r.length;i++)
        {
            if(r[i]=="def")
                {
                    v++;
                }
        }
    let s=(v/r.length)*100;
    return s;
}
export function exten(t)
{
    const r=t.split(".");
    if(r[1]=="html")
     {
        return "html file";
     }
    else if(r[1]=="png")
        {
            return "png file";
        }
    else if(r[1]=="jpg")
        {
            return "jpg file";
        }
    
}
export default function def(a){
    return a;
}