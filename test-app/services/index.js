
export async function buttonClicked(user) {
    const response = await fetch(`/api/clicked`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user })
    })
    return await response.json();
}