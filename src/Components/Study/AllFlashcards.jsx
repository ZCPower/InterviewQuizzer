import React, { useState, useEffect } from 'react'
import { fetchAllFlashcards } from '../../api/flash';

function AllFlashcards() {

    useEffect(() => {
        async function fetchFlash() {
            try {
                await fetchAllFlashcards()
                    .then((result) => {
                        console.log(result)
                    })
            } catch (error) {
                console.error(error)
            }
        }
        fetchFlash()
    })


    return (
        <div>Login</div>
    )
}

export default AllFlashcards