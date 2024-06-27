// React'ten useState hook'unu içe aktarıyoruz
import { useState } from 'react';

function BookEdit({ book, onSubmit }) {
    // title state'ini book.title ile başlatıyoruz
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        // input değerini güncellemek için setTitle fonksiyonunu çağırıyoruz
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        // formun varsayılan davranışını (sayfanın yenilenmesi) engelliyoruz
        event.preventDefault();
        // onSubmit prop'unu çağırıyoruz ve book.id ile title değerlerini geçiriyoruz
        onSubmit(book.id, title);
    };

    // bileşenin JSX çıktısını tanımlıyoruz
    return (
        // form elementini oluşturuyoruz ve handleSubmit fonksiyonunu onSubmit olayına bağlıyoruz
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input
                className="input"
                value={title}
                onChange={handleChange}
            />
            <button className="button is-primary">
                Save
            </button>
        </form>
    );
}

export default BookEdit;
