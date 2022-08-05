import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        // console.log(user)
        // const email = user?.user?.email;
        // // const name = user?.user?.displayName;

        // const currentUser = {
        //     email: email
        // }
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`http://localhost:5000/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const accessToken = data.token;
                    // console.log("accessToken", typeof (accessToken));
                    localStorage.setItem('accessToken', accessToken);
                    // console.log(localStorage);
                    setToken(accessToken);
                })

        }
    }, [user])
    return [token]
}
export default useToken;