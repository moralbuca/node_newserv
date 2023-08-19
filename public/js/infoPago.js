console.log("infoPago ON")

fetch(`${API_URL}/view`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 123123123',
    },
    body: JSON.stringify({message: 'P3'})
})