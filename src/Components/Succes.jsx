export default function Success({ founded, timer }) {
    if (founded === 8) {
      alert(`Tebrikler!!, tüm kareleri doğru şekilde açtın.`);
    }
   return (
       <h2>
           {founded === 8 ? '' : 'OYUN BAŞLADI '}
       </h2>
   )
}