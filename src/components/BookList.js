import BookShow from "./BookShow";
import '../styles.css';


// BookList bileşeni, props olarak books, onDelete ve onEdit alır.
function BookList({ books, onDelete, onEdit }) {
    // books dizisini map ile dolaşarak, her bir book objesi için BookShow bileşenini oluştururuz.
    const renderedBooks = books.map((book) => {
        return (
            // BookShow bileşenine onEdit, onDelete ve book objesini prop olarak geçiriyoruz.
            <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
        );
    });
    // Oluşturulan BookShow bileşenlerini div içinde döneriz.
    return <div className="book-list">
        {renderedBooks}
    </div>;
}

// BookList bileşenini dışa aktarıyoruz.
export default BookList;
