
import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
<<<<<<< HEAD
                    // setAdminLoading(false)
=======
                    console.log(admin, 'from useAdmin')
                    setAdminLoading(false)
>>>>>>> 98a6eacd8865adac54b462bf029ce44cf9b3a9d7

                })
        }
    }, [user])
    return [admin, adminLoading]
}
export default useAdmin;





















// import { useEffect, useState } from "react"

// const useAdmin = user => {
//     const [admin, setAdmin] = useState(false);
//     const [adminLoading, setAdminLoading] = useState(true);
//     useEffect(() => {
//         const email = user?.email;
//         if (email) {
//             fetch(`http://localhost:5000/admin/${email}`, {
//                 method: 'GET',
//                 headers: {
//                     'content-type': 'application/json',
//                     authorization: `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     setAdmin(data.admin);
//                     setAdminLoading(false);
//                 })
//         }
//     }, [user])

//     return [admin, adminLoading]
// }

// export default useAdmin;






// // import { useEffect, useState } from "react"
// // import Loading from "../Pages/Shared/Loading/Loading";

// // const useAdmin = (user) => {
// //     const [admin, setAdmin] = useState(false);
// //     const [adminLoading, setAdminLoading] = useState(true)

// //     useEffect(() => {
// //         const email = user?.email;

// //         if (email) {
// //             fetch(`http://localhost:5000/admin/${email}`, {
// //                 method: 'GET',
// //                 headers: {
// //                     'content-type': 'application/json',
// //                     authorization: `Bearer ${localStorage.getItem('accessToken')}`
// //                 }
// //             })
// //                 .then(res => res.json())
// //                 .then(data => {
// //                     setAdmin(data.admin)
// //                     setAdminLoading(false)

// //                 })
// //         }
// //     }, [user])
// //     return [admin, adminLoading]
// // }
// // export default useAdmin;