interface NavItem {
    id:number|string
    name:string
    url:string
}


export const NavList:NavItem[] = [
{
    id:1,
    name:"About us",
    url:"#about"
},
{
    id:2,
    name:"Services",
    url:"#services"

},
{
    id:4,
    name:"Use Cases",
    url:"#use_cases"

},
{
    id:5,
    name:"Pricing",
    url:"/pricing"

},
{
    id:6,
    name:"Blog",
    url:"/blog"

}
]