
    
    
    // استدعاء البيانات من ملف JSON
const urlParams = new URLSearchParams(window.location.search);
const year = urlParams.post('year');
const semester = urlParams.post('semester');
const fileName = `year${year}semester${semester}.json`;

fetch(fileName)
  .then(response => response.json())
  .then(data => {
    const allBooksContainer = document.getElementById('all-books');
    
    // إنشاء العناصر ديناميكيًا بناءً على البيانات المستلمة من JSON
    data.forEach(bookData => {
      const bookElement = createBookElement(bookData);
      allBooksContainer.appendChild(bookElement);
    });
  });

// إنشاء عنصر الكتاب
function createBookElement(bookData) {
  const bookDiv = document.createElement('div');
  bookDiv.className = 'book';

  const bookImageDiv = document.createElement('div');
  bookImageDiv.className = 'book-image';
  const bookImage = document.createElement('img');
  bookImage.src = bookData.image;
  bookImage.alt = bookData.title;
  bookImage.className = 'book-cover';
  bookImageDiv.appendChild(bookImage);
  bookDiv.appendChild(bookImageDiv);

  const bookDetailsDiv = document.createElement('div');
  bookDetailsDiv.className = 'book-details';
  const bookTitle = document.createElement('h2');
  bookTitle.textContent = bookData.title;
  bookDetailsDiv.appendChild(bookTitle);
  const downloadLinkDiv = document.createElement('div');
  downloadLinkDiv.className = 'download-link';
  const downloadLink = document.createElement('a');
  downloadLink.href = bookData.downloadLink;
  downloadLink.textContent = 'تحميل الكتاب';
  downloadLinkDiv.appendChild(downloadLink);
  bookDetailsDiv.appendChild(downloadLinkDiv);
  bookDiv.appendChild(bookDetailsDiv);

  return bookDiv;
}

    
    
  
