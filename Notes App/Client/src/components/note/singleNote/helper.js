
export function checkLength()
{
    const checkDescriptionLength= (note) => 
    {
       if (note.length>35) {
         return note.substring(0,35).trim() + '...'
       } else {
         return note
       }
    }
    
    const checkTitleLength= (title) => 
    {
       if (title.length>13) {
         return title.substring(0,13).trim() + '...'
       } else {
         return title
       }

}
return {checkDescriptionLength, checkTitleLength}
}

