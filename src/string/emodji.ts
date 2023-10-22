export const rm_emodji = (data: string) => {
    return data.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '')
}

