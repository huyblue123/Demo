function showSection(sectionId) {
    // Ẩn tất cả các phần nội dung
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Hiện phần nội dung được chọn
    document.getElementById(sectionId).classList.add('active');
}

document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Lấy giá trị từ các ô nhập
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;

    // Tạo một hàng mới trong bảng
    const bookList = document.getElementById('bookList');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${year}</td>
        <td class="action-buttons">
            <button class="edit-btn" onclick="editBook(this)">Sửa</button>
            <button class="delete-btn" onclick="deleteBook(this)">Xóa</button>
        </td>
    `;

    bookList.appendChild(row);

    // Xóa dữ liệu trong form
    document.getElementById('bookForm').reset();
});

function editBook(btn) {
    const row = btn.parentElement.parentElement;
    document.getElementById('title').value = row.cells[0].innerText;
    document.getElementById('author').value = row.cells[1].innerText;
    document.getElementById('year').value = row.cells[2].innerText;

    deleteBook(btn); // Xóa sách hiện tại để thêm sách mới với thông tin đã chỉnh sửa
}

function deleteBook(btn) {
    const row = btn.parentElement.parentElement;
    row.remove();
}
