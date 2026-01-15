// Scegli un esercizio tra Il compleanno dello chef e Dashboard della città del Modulo 1 – Advanced JavaScript e riscrivilo utilizzando TypeScript.

// Tipizza tutte le variabili, funzioni e strutture dati in modo esplicito, e verifica che il comportamento finale sia identico alla versione in JavaScript.

async function getChefBirthday(id: number): Promise<string> {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!response.ok) {
      throw new Error("Errore HTTP");
    }
    const data = await response.json();
    const userId = data.userId;
    const chefResponse = await fetch(`https://dummyjson.com/users/${userId}`);
    const chefData = await chefResponse.json();
    const chefBirthday =chefData.birthDate;
    return chefBirthday
  } catch (error) {
  if (error instanceof Error) {
    throw error; 
  }
  throw new Error("Errore"); 
}
}
getChefBirthday(1);