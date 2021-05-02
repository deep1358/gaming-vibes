exports.handler = async(event,context) =>{
  const guides=[
    {title:"Title1",author:'mario'}
  ]

  if (context.clientContext.user){
     return{
      statusCode:200,
      body:JSON.stringify(guides)
    }
  }

 return {
   statusCode:401,
   body:JSON.stringify({msg:"Must be Logged in"})
 }
}