const Content=()=> {
          const handleName= function() {
          const names=['Ivan','Pesho','Gosho']
          const randonName=Math.floor(Math.random()*names.length);
          return names[randonName];
        }
    return (
    <main>
         <p>
             Hello {handleName()}!
         </p>
    </main>   
       
    )
}


export default Content