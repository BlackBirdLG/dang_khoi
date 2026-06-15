const sumOfEvenNumbers = (numbers) => {
    // Khởi tạo biến tổng
    let sum = 0;

    // Duyệt qua từng phần tử trong mảng
    for (let num of numbers) {
        // Kiểm tra xem số đó có phải là số chẵn hay không
        if (num % 2 === 0) {
            // Nếu là số chẵn, cộng vào tổng
            sum += num;
        }
    }

    // Trả về kết quả
    return sum;
};

// Ví dụ kiểm tra:
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // Kết quả: 12
