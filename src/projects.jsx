import Header from "./hearder";

function Projects() {

    return (
        <>
            <Header />
            <div style={{ backgroundColor: "#01011A" }} className="container-fluid w-100 "   >
                <div className="row" >

                    <section style={{ maxHeight: "470px", }} className=" mt-5  col-md-7 d-flex justify-content-center">
                        <a href="https://monumental-daffodil-f8f686.netlify.app/" className="fade"><img className="fade" style={{ maxHeight: "100%", width: "100%" }} src="https://i.ibb.co/9kT606g6/Captura-de-tela-2025-02-09-190525.png" alt="" /></a>
                    </section>
                    <section className="col-md-5 d-flex flex-column justify-content-around align-items-center">
                        <h1 style={{ color: "#6F848C" }} className="text-center mt-5  fade  ">Movie</h1>
                        <p style={{ color: "#6F848C" }} className="text-center  mt-5  fade   " >Descubra os filmes que estão em alta e extraia informação deles.  </p>
                        <div className="fade"> <img src="data:image/png;base64,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" alt="html-5" />
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEElEQVR4nO3YSUwUQRQA0J5qF4zx4JK4HEz04HrRg3G5aIxr4nJRb+pFOelBYaoaVDSgkcUVN0Qxbgfxoh5QYKp6RBQXkIjKMuAoiAziMKCCKCiU6THQXTgtM12lk5j5SSVkuqu7Hr+2LkmKRCQi8f8GQKQdIELDWiBusw6AxB12AMKvODKAH4YdAEmRZYAN4pu8DZDPNYRejlb21bchcsM6AOHMsAAOvdABEJ/lyUBSOAAgucyQAZxoGQAQ2R4WwIGnhjGAt1kHQLIhLIDEx3p9hay3DJCQY5FZw6alPqAtLS0DlmBizOVGFpHwoO89kl1daB0A86ebAcYm3hMC6KGUDjnfLwO7C3VAnHOadYDiGG0GGBKnUp+PH/Cxs/v3LhTn1AE7ckdZB0jUBhDuMkO88Xi5AbVtP1jA2XrDO3CX1gYOgH8mahA5iKdmNzGAMl8Xe8/pN4YZiLzjarwfAEmpSMD8W14GUODpZLvPCbex/lNugA3hXJGAVbk+BnCr9it7zzGXYRUmd/gBEF8SCdjsZMfFpeov7D2Hyw2rMLkoIgNpwTY21eEKeRAff9HOAlKeGzKAU7kBAJLYYAEJOZUhAxJLP7Nj4GCpcRaK4QcgsilYwM6bL0MGxD76xAKSivVn2slGboAM1eXBAqKvPw8ZsKWglQXse6iPH4Us4wZIyDFb5CC+WtPBANY5fOw9e+731ZVinbP4Afb8CSIBOW+/MoClOc1sBuLv6oD4gvH8gL3OQQCS7kCNm5nG7kgLqxoGBBS972QAc2580K9nvqNAUXsHcI8UXTKYH/BrJmoOBJh4oJABlLgbBwRUtH5nAFOym/TrGXXGGcgrpPF+ACIVgQAj995lALWNXro8s5hGxeu7yd7GDcvy0NW5Ptra2c0Axl3RvwXAqdf68yEpFwawQeIMBBhssqV+7fHSkwWv6OIzT+iK2830gusLbfnGNrw3orI8egbSq42rsCoOgHC22SCtb2q2vJ1u/97DdrEjhuMUSK6JA0CcbgY4olb/8bvALLSulFHRbxuRZjhOQfi4MABAZPefpkqtKy048Zgm57uoq77JFKB1oys1HXRtns8/JuT+X2IpzwxjAO8SB4Bka7DzvhFTVf+B+gZotGx2nILwFmEAGalrrSxi2nfz0CyLxyl2skYYQILOeaJWYtNypo7dRijqXHEAxTFZOEBbdU+6qZxS9uscSGHrSTF5k8QBYvKGCwFk1FH5aBUF+4spMCx2IEDR3ikJDS0Lihptg+Q6QPhz0Ij0GgqSn1E5Qe8egQvusEHiAApGUhyeIf3V2FE0TFYcS2yQJAOIS6xmB0Di1o7P/eef9vsjpLBF0Nn5l/9lnuxAvNK/ekNcoxXtb+037Zrl50YiEpH4P+Mn9Q+e3CSBSHQAAAAASUVORK5CYII=" alt="css3" />
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nGNgGAWjYBSMgkEJvt+X+z+YMMOoB+6PxsD/0SREChjoJPN9NBPfH/hQ/z5ajN4f+JD/PlqR3R8cmIFUMNAO/j7qgfsDH+rfR5PQfUpCjBGOl04VQZE7s1Pyf6gv939xUZb/LMyM/yXFWf5HBvD8P7tTcvB7YPtSsf8c7Ewo8gxQzMXJBJYftB74elfuv4IsK1ycnY3pv4YKG5iGiZkasP//dm+QeuDkNgm4GBMT4//TOyBJ5tZRqf9K8qz/cxL5/r++Kjt4Y2DXCnG4GCgZfbyFcOy769gdPqg8cPuYNIq4rxvX/5tHpIg0bxB4AIRd7ThR5DjYmf4nhvP+v7xfamh44N4J6f/62uwYJRAzMyPYI28Gcx6AYZAjy7L5//NwYRanOups/59fkBncHoDhp+dk/jeXCfwXE2FBUZ8VzzewHgCV9/g8gF7Ov7gkAy7/YeplJFno5wFQKeLjwvV/3VxRuNjVA1IoHliLJDe3T/i/kS47RnnfXSsIV8/GykQfDyyeLAKu/mGlSU4S3/+JzUL/LU04UDwAavuA1IPaPzAxe0vO/3eOS4PFn1+U+W9rjtADqq3p4oFL+6TgHsCFVRRY4Ummpx4RyiDMyMj4X0qCBaUpAcKlWfz0S0I7l4v95+Nhxup4UFLYugTROAN5pCJHAK+Hbcw4sBalNPMACD84Jf0/O4Hvv6wUK7g8BzWTAz25/x/fLIFV/aH1Ev/D/Xn+qylBGnIC/Mxgh09pE/r/+TauUo2GHqAHZhj1wP3RGPhP1yQ0CkbBKBgFDPQAANX6rlnxM/hBAAAAAElFTkSuQmCC" alt="javascript" />
                            <img className="ms-2" src="data:image/png;base64,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" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"></img>
                            <img className="ms-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/0lEQVR4nO2Y3WtcRRiHV+g/IKg9s9pcWJVeCt4VEdS01ptetje9akVNztkoggW/GlExMUKhUkigBQPFgFUsTYooSC1VaSghwS+K0aqtSUy2aXaTTfYjOzNPmXN2sysmu2d2YzbFfeHH3rzM+T3vvO/sOROJNKMZzfh/RGeELW0t3LkR6oywZd2Me1H2ew5jrkB5AjZCrnmWw1j7VvbVZ15weKNMe2tpKy/XZL7jXh70BLLRAK4g334fD9RS/Vcbbd4rQbxiDeAK+jYRQF8tO9DfaONeSf32O+AwsAmM48vhI3sAwScNNy5WdNoawBMMhVm8exf/DA3aSIGSoPKQz0D8D82lAU3P0zXMgMOg/Q44jNoCFI1rWTIvlzUyFyif1SwvaYa6LQEEI5b2ucN1SIQFKK/4lx8UdEzzxTHNV72a0UFNel6Tz2iW0wHEyWesZmDOeLJpnx1hF/cBCuZlbu281x6GqSuB+dyiZvxbbbcLUR4KD+DwXGiA1rJez1Y2dfIQvvlsSrM4q4lFrebgeZsdGLYCMH2+HLRIpdyuJyG7oMkuKOauK9s5uBTKfEyw22bhrlZKA5quDNDvarLzikxSMXLGroU8oyitlc3fzXbPYcIWwJg31TftsVZez1MQ/zUwn4or3n7M0rzw2+ivtnu4f7WW2eE6HPEESdtFTVsUTxcD8FkngY7A2XfgwgnNla8D45mEYmZccXSvvXmvpKTn8IbxXA7QW+uCBsA/WQqnSy4VDKnp80yhXYzSCcXvw4q+A5oXWuoCoKDedQMoNz75s2byJ8WE0Y/Kb5v0XKClm4qlWcW1MUXPnnUE6BC0uIKYK5iuCcCvuPYrvVqOqfj7e+Dyac3iDcViXDH3p+KtnTXMQeDRM57/NQsv3oXwBFdtAYrtYqpcLX94QJOakaSmJd+dsj5KfzMeK55E7YJHrQCeYKXPTYtUyz++X7MwLVn4W3JjXNoA6FiUnZEw4TpcDLvwuwYgEQyp6e9q+Uf3at/8/JQkOSHp2Ba6+hciYSMW5aANQHFATX9Xyz/zpmJ+Uvqa+N5qBw6FBzB/aBYAxdMlNVMZ4Pg+zezVwLzR+d7wM7DqH1iVNroZCuBxfPOm+gbgXLfmXLf5VQx1KT5/T/HNh4rxi6XKG8V/kbz+SMjqO8xamfcBBCNhAcyxaF4PiqeL6XFfUyXD5bo+KunZbfUudNkewGEwLMCK8enVjSeuSSZ/kIx8qjgV07y0PbRxCjtw9nb/qP/YGsBcZWwC49R8rXLbX2x5dbzgbZarxcONNu7Vc8Xuv6E65Bpt3nXItkXZZg1QdjuhGwigXcGzkXrCfOS7gvO1fG7WoaR5pivYVZf5ZjSjGc2I/NdxCxYXR2hUdbejAAAAAElFTkSuQmCC" alt="bootstrap"></img></div>
                    </section>

                    <section style={{ maxHeight: "470px" }} className="  mt-5 col-md-7 d-flex mt-md-5  justify-content-center">
                        <a href="https://whimsical-beignet-2ebfa9.netlify.app/" className="fade ">  <img className="fade" style={{ maxHeight: "100%", width: "100%" }} src="https://i.ibb.co/dwH2dQkj/Captura-de-tela-2025-02-16-003355.png" alt="" /></a>

                    </section>
                    <section className="  mt-5  col-md-5 d-flex flex-column justify-content-around align-items-center ">
                        <h1 style={{ color: "#6F848C" }} className="text-center mt-5  fade "> virtual Store</h1>
                        <p style={{ color: "#6F848C" }} className=" text-center  mt-5  fade ">Uma loja virtual onde você pode encontrar roupas, jóias e informática.  </p>
                        <div className="fade"> <img src="data:image/png;base64,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" alt="html-5" />
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEElEQVR4nO3YSUwUQRQA0J5qF4zx4JK4HEz04HrRg3G5aIxr4nJRb+pFOelBYaoaVDSgkcUVN0Qxbgfxoh5QYKp6RBQXkIjKMuAoiAziMKCCKCiU6THQXTgtM12lk5j5SSVkuqu7Hr+2LkmKRCQi8f8GQKQdIELDWiBusw6AxB12AMKvODKAH4YdAEmRZYAN4pu8DZDPNYRejlb21bchcsM6AOHMsAAOvdABEJ/lyUBSOAAgucyQAZxoGQAQ2R4WwIGnhjGAt1kHQLIhLIDEx3p9hay3DJCQY5FZw6alPqAtLS0DlmBizOVGFpHwoO89kl1daB0A86ebAcYm3hMC6KGUDjnfLwO7C3VAnHOadYDiGG0GGBKnUp+PH/Cxs/v3LhTn1AE7ckdZB0jUBhDuMkO88Xi5AbVtP1jA2XrDO3CX1gYOgH8mahA5iKdmNzGAMl8Xe8/pN4YZiLzjarwfAEmpSMD8W14GUODpZLvPCbex/lNugA3hXJGAVbk+BnCr9it7zzGXYRUmd/gBEF8SCdjsZMfFpeov7D2Hyw2rMLkoIgNpwTY21eEKeRAff9HOAlKeGzKAU7kBAJLYYAEJOZUhAxJLP7Nj4GCpcRaK4QcgsilYwM6bL0MGxD76xAKSivVn2slGboAM1eXBAqKvPw8ZsKWglQXse6iPH4Us4wZIyDFb5CC+WtPBANY5fOw9e+731ZVinbP4Afb8CSIBOW+/MoClOc1sBuLv6oD4gvH8gL3OQQCS7kCNm5nG7kgLqxoGBBS972QAc2580K9nvqNAUXsHcI8UXTKYH/BrJmoOBJh4oJABlLgbBwRUtH5nAFOym/TrGXXGGcgrpPF+ACIVgQAj995lALWNXro8s5hGxeu7yd7GDcvy0NW5Ptra2c0Axl3RvwXAqdf68yEpFwawQeIMBBhssqV+7fHSkwWv6OIzT+iK2830gusLbfnGNrw3orI8egbSq42rsCoOgHC22SCtb2q2vJ1u/97DdrEjhuMUSK6JA0CcbgY4olb/8bvALLSulFHRbxuRZjhOQfi4MABAZPefpkqtKy048Zgm57uoq77JFKB1oys1HXRtns8/JuT+X2IpzwxjAO8SB4Bka7DzvhFTVf+B+gZotGx2nILwFmEAGalrrSxi2nfz0CyLxyl2skYYQILOeaJWYtNypo7dRijqXHEAxTFZOEBbdU+6qZxS9uscSGHrSTF5k8QBYvKGCwFk1FH5aBUF+4spMCx2IEDR3ikJDS0Lihptg+Q6QPhz0Ij0GgqSn1E5Qe8egQvusEHiAApGUhyeIf3V2FE0TFYcS2yQJAOIS6xmB0Di1o7P/eef9vsjpLBF0Nn5l/9lnuxAvNK/ekNcoxXtb+037Zrl50YiEpH4P+Mn9Q+e3CSBSHQAAAAASUVORK5CYII=" alt="css3" />
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nGNgGAWjYBSMgkEJvt+X+z+YMMOoB+6PxsD/0SREChjoJPN9NBPfH/hQ/z5ajN4f+JD/PlqR3R8cmIFUMNAO/j7qgfsDH+rfR5PQfUpCjBGOl04VQZE7s1Pyf6gv939xUZb/LMyM/yXFWf5HBvD8P7tTcvB7YPtSsf8c7Ewo8gxQzMXJBJYftB74elfuv4IsK1ycnY3pv4YKG5iGiZkasP//dm+QeuDkNgm4GBMT4//TOyBJ5tZRqf9K8qz/cxL5/r++Kjt4Y2DXCnG4GCgZfbyFcOy769gdPqg8cPuYNIq4rxvX/5tHpIg0bxB4AIRd7ThR5DjYmf4nhvP+v7xfamh44N4J6f/62uwYJRAzMyPYI28Gcx6AYZAjy7L5//NwYRanOups/59fkBncHoDhp+dk/jeXCfwXE2FBUZ8VzzewHgCV9/g8gF7Ov7gkAy7/YeplJFno5wFQKeLjwvV/3VxRuNjVA1IoHliLJDe3T/i/kS47RnnfXSsIV8/GykQfDyyeLAKu/mGlSU4S3/+JzUL/LU04UDwAavuA1IPaPzAxe0vO/3eOS4PFn1+U+W9rjtADqq3p4oFL+6TgHsCFVRRY4Ummpx4RyiDMyMj4X0qCBaUpAcKlWfz0S0I7l4v95+Nhxup4UFLYugTROAN5pCJHAK+Hbcw4sBalNPMACD84Jf0/O4Hvv6wUK7g8BzWTAz25/x/fLIFV/aH1Ev/D/Xn+qylBGnIC/Mxgh09pE/r/+TauUo2GHqAHZhj1wP3RGPhP1yQ0CkbBKBgFDPQAANX6rlnxM/hBAAAAAElFTkSuQmCC" alt="javascript" />

                            <img className="ms-2" src="data:image/png;base64,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" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"></img>
                            <img className="ms-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/0lEQVR4nO2Y3WtcRRiHV+g/IKg9s9pcWJVeCt4VEdS01ptetje9akVNztkoggW/GlExMUKhUkigBQPFgFUsTYooSC1VaSghwS+K0aqtSUy2aXaTTfYjOzNPmXN2sysmu2d2YzbFfeHH3rzM+T3vvO/sOROJNKMZzfh/RGeELW0t3LkR6oywZd2Me1H2ew5jrkB5AjZCrnmWw1j7VvbVZ15weKNMe2tpKy/XZL7jXh70BLLRAK4g334fD9RS/Vcbbd4rQbxiDeAK+jYRQF8tO9DfaONeSf32O+AwsAmM48vhI3sAwScNNy5WdNoawBMMhVm8exf/DA3aSIGSoPKQz0D8D82lAU3P0zXMgMOg/Q44jNoCFI1rWTIvlzUyFyif1SwvaYa6LQEEI5b2ucN1SIQFKK/4lx8UdEzzxTHNV72a0UFNel6Tz2iW0wHEyWesZmDOeLJpnx1hF/cBCuZlbu281x6GqSuB+dyiZvxbbbcLUR4KD+DwXGiA1rJez1Y2dfIQvvlsSrM4q4lFrebgeZsdGLYCMH2+HLRIpdyuJyG7oMkuKOauK9s5uBTKfEyw22bhrlZKA5quDNDvarLzikxSMXLGroU8oyitlc3fzXbPYcIWwJg31TftsVZez1MQ/zUwn4or3n7M0rzw2+ivtnu4f7WW2eE6HPEESdtFTVsUTxcD8FkngY7A2XfgwgnNla8D45mEYmZccXSvvXmvpKTn8IbxXA7QW+uCBsA/WQqnSy4VDKnp80yhXYzSCcXvw4q+A5oXWuoCoKDedQMoNz75s2byJ8WE0Y/Kb5v0XKClm4qlWcW1MUXPnnUE6BC0uIKYK5iuCcCvuPYrvVqOqfj7e+Dyac3iDcViXDH3p+KtnTXMQeDRM57/NQsv3oXwBFdtAYrtYqpcLX94QJOakaSmJd+dsj5KfzMeK55E7YJHrQCeYKXPTYtUyz++X7MwLVn4W3JjXNoA6FiUnZEw4TpcDLvwuwYgEQyp6e9q+Uf3at/8/JQkOSHp2Ba6+hciYSMW5aANQHFATX9Xyz/zpmJ+Uvqa+N5qBw6FBzB/aBYAxdMlNVMZ4Pg+zezVwLzR+d7wM7DqH1iVNroZCuBxfPOm+gbgXLfmXLf5VQx1KT5/T/HNh4rxi6XKG8V/kbz+SMjqO8xamfcBBCNhAcyxaF4PiqeL6XFfUyXD5bo+KunZbfUudNkewGEwLMCK8enVjSeuSSZ/kIx8qjgV07y0PbRxCjtw9nb/qP/YGsBcZWwC49R8rXLbX2x5dbzgbZarxcONNu7Vc8Xuv6E65Bpt3nXItkXZZg1QdjuhGwigXcGzkXrCfOS7gvO1fG7WoaR5pivYVZf5ZjSjGc2I/NdxCxYXR2hUdbejAAAAAElFTkSuQmCC" alt="bootstrap"></img></div>
                    </section>
                    <section style={{ maxHeight: "470px" }} className="  mt-5 col-md-7 d-flex mt-md-5  justify-content-center">
                        <a href="https://enchanting-peony-5e913e.netlify.app/" className="fade">  <img className="fade" style={{ maxHeight: "100%", width: "100%" }} src="https://i.ibb.co/3m84LsSQ/Captura-de-tela-2025-02-12-110344.png" alt="" /></a>

                    </section>
                    <section className="   mt-5 col-md-5 d-flex flex-column justify-content-around align-items-center ">
                        <h1 style={{ color: "#6F848C" }} className="text-center  mt-5 fade  "> wheather</h1>
                        <p style={{ color: "#6F848C" }} className=" text-center mt-5  fade"> Descubra as condições climáticas de todas as regiões do mundo. </p>
                        <div className="fade"> <img src="data:image/png;base64,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" alt="html-5" />
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEElEQVR4nO3YSUwUQRQA0J5qF4zx4JK4HEz04HrRg3G5aIxr4nJRb+pFOelBYaoaVDSgkcUVN0Qxbgfxoh5QYKp6RBQXkIjKMuAoiAziMKCCKCiU6THQXTgtM12lk5j5SSVkuqu7Hr+2LkmKRCQi8f8GQKQdIELDWiBusw6AxB12AMKvODKAH4YdAEmRZYAN4pu8DZDPNYRejlb21bchcsM6AOHMsAAOvdABEJ/lyUBSOAAgucyQAZxoGQAQ2R4WwIGnhjGAt1kHQLIhLIDEx3p9hay3DJCQY5FZw6alPqAtLS0DlmBizOVGFpHwoO89kl1daB0A86ebAcYm3hMC6KGUDjnfLwO7C3VAnHOadYDiGG0GGBKnUp+PH/Cxs/v3LhTn1AE7ckdZB0jUBhDuMkO88Xi5AbVtP1jA2XrDO3CX1gYOgH8mahA5iKdmNzGAMl8Xe8/pN4YZiLzjarwfAEmpSMD8W14GUODpZLvPCbex/lNugA3hXJGAVbk+BnCr9it7zzGXYRUmd/gBEF8SCdjsZMfFpeov7D2Hyw2rMLkoIgNpwTY21eEKeRAff9HOAlKeGzKAU7kBAJLYYAEJOZUhAxJLP7Nj4GCpcRaK4QcgsilYwM6bL0MGxD76xAKSivVn2slGboAM1eXBAqKvPw8ZsKWglQXse6iPH4Us4wZIyDFb5CC+WtPBANY5fOw9e+731ZVinbP4Afb8CSIBOW+/MoClOc1sBuLv6oD4gvH8gL3OQQCS7kCNm5nG7kgLqxoGBBS972QAc2580K9nvqNAUXsHcI8UXTKYH/BrJmoOBJh4oJABlLgbBwRUtH5nAFOym/TrGXXGGcgrpPF+ACIVgQAj995lALWNXro8s5hGxeu7yd7GDcvy0NW5Ptra2c0Axl3RvwXAqdf68yEpFwawQeIMBBhssqV+7fHSkwWv6OIzT+iK2830gusLbfnGNrw3orI8egbSq42rsCoOgHC22SCtb2q2vJ1u/97DdrEjhuMUSK6JA0CcbgY4olb/8bvALLSulFHRbxuRZjhOQfi4MABAZPefpkqtKy048Zgm57uoq77JFKB1oys1HXRtns8/JuT+X2IpzwxjAO8SB4Bka7DzvhFTVf+B+gZotGx2nILwFmEAGalrrSxi2nfz0CyLxyl2skYYQILOeaJWYtNypo7dRijqXHEAxTFZOEBbdU+6qZxS9uscSGHrSTF5k8QBYvKGCwFk1FH5aBUF+4spMCx2IEDR3ikJDS0Lihptg+Q6QPhz0Ij0GgqSn1E5Qe8egQvusEHiAApGUhyeIf3V2FE0TFYcS2yQJAOIS6xmB0Di1o7P/eef9vsjpLBF0Nn5l/9lnuxAvNK/ekNcoxXtb+037Zrl50YiEpH4P+Mn9Q+e3CSBSHQAAAAASUVORK5CYII=" alt="css3" />
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nGNgGAWjYBSMgkEJvt+X+z+YMMOoB+6PxsD/0SREChjoJPN9NBPfH/hQ/z5ajN4f+JD/PlqR3R8cmIFUMNAO/j7qgfsDH+rfR5PQfUpCjBGOl04VQZE7s1Pyf6gv939xUZb/LMyM/yXFWf5HBvD8P7tTcvB7YPtSsf8c7Ewo8gxQzMXJBJYftB74elfuv4IsK1ycnY3pv4YKG5iGiZkasP//dm+QeuDkNgm4GBMT4//TOyBJ5tZRqf9K8qz/cxL5/r++Kjt4Y2DXCnG4GCgZfbyFcOy769gdPqg8cPuYNIq4rxvX/5tHpIg0bxB4AIRd7ThR5DjYmf4nhvP+v7xfamh44N4J6f/62uwYJRAzMyPYI28Gcx6AYZAjy7L5//NwYRanOups/59fkBncHoDhp+dk/jeXCfwXE2FBUZ8VzzewHgCV9/g8gF7Ov7gkAy7/YeplJFno5wFQKeLjwvV/3VxRuNjVA1IoHliLJDe3T/i/kS47RnnfXSsIV8/GykQfDyyeLAKu/mGlSU4S3/+JzUL/LU04UDwAavuA1IPaPzAxe0vO/3eOS4PFn1+U+W9rjtADqq3p4oFL+6TgHsCFVRRY4Ummpx4RyiDMyMj4X0qCBaUpAcKlWfz0S0I7l4v95+Nhxup4UFLYugTROAN5pCJHAK+Hbcw4sBalNPMACD84Jf0/O4Hvv6wUK7g8BzWTAz25/x/fLIFV/aH1Ev/D/Xn+qylBGnIC/Mxgh09pE/r/+TauUo2GHqAHZhj1wP3RGPhP1yQ0CkbBKBgFDPQAANX6rlnxM/hBAAAAAElFTkSuQmCC" alt="javascript" />

                            <img className="ms-2" src="data:image/png;base64,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" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"></img>
                            <img className="ms-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/0lEQVR4nO2Y3WtcRRiHV+g/IKg9s9pcWJVeCt4VEdS01ptetje9akVNztkoggW/GlExMUKhUkigBQPFgFUsTYooSC1VaSghwS+K0aqtSUy2aXaTTfYjOzNPmXN2sysmu2d2YzbFfeHH3rzM+T3vvO/sOROJNKMZzfh/RGeELW0t3LkR6oywZd2Me1H2ew5jrkB5AjZCrnmWw1j7VvbVZ15weKNMe2tpKy/XZL7jXh70BLLRAK4g334fD9RS/Vcbbd4rQbxiDeAK+jYRQF8tO9DfaONeSf32O+AwsAmM48vhI3sAwScNNy5WdNoawBMMhVm8exf/DA3aSIGSoPKQz0D8D82lAU3P0zXMgMOg/Q44jNoCFI1rWTIvlzUyFyif1SwvaYa6LQEEI5b2ucN1SIQFKK/4lx8UdEzzxTHNV72a0UFNel6Tz2iW0wHEyWesZmDOeLJpnx1hF/cBCuZlbu281x6GqSuB+dyiZvxbbbcLUR4KD+DwXGiA1rJez1Y2dfIQvvlsSrM4q4lFrebgeZsdGLYCMH2+HLRIpdyuJyG7oMkuKOauK9s5uBTKfEyw22bhrlZKA5quDNDvarLzikxSMXLGroU8oyitlc3fzXbPYcIWwJg31TftsVZez1MQ/zUwn4or3n7M0rzw2+ivtnu4f7WW2eE6HPEESdtFTVsUTxcD8FkngY7A2XfgwgnNla8D45mEYmZccXSvvXmvpKTn8IbxXA7QW+uCBsA/WQqnSy4VDKnp80yhXYzSCcXvw4q+A5oXWuoCoKDedQMoNz75s2byJ8WE0Y/Kb5v0XKClm4qlWcW1MUXPnnUE6BC0uIKYK5iuCcCvuPYrvVqOqfj7e+Dyac3iDcViXDH3p+KtnTXMQeDRM57/NQsv3oXwBFdtAYrtYqpcLX94QJOakaSmJd+dsj5KfzMeK55E7YJHrQCeYKXPTYtUyz++X7MwLVn4W3JjXNoA6FiUnZEw4TpcDLvwuwYgEQyp6e9q+Uf3at/8/JQkOSHp2Ba6+hciYSMW5aANQHFATX9Xyz/zpmJ+Uvqa+N5qBw6FBzB/aBYAxdMlNVMZ4Pg+zezVwLzR+d7wM7DqH1iVNroZCuBxfPOm+gbgXLfmXLf5VQx1KT5/T/HNh4rxi6XKG8V/kbz+SMjqO8xamfcBBCNhAcyxaF4PiqeL6XFfUyXD5bo+KunZbfUudNkewGEwLMCK8enVjSeuSSZ/kIx8qjgV07y0PbRxCjtw9nb/qP/YGsBcZWwC49R8rXLbX2x5dbzgbZarxcONNu7Vc8Xuv6E65Bpt3nXItkXZZg1QdjuhGwigXcGzkXrCfOS7gvO1fG7WoaR5pivYVZf5ZjSjGc2I/NdxCxYXR2hUdbejAAAAAElFTkSuQmCC" alt="bootstrap"></img></div>
                    </section>

                    <section style={{ maxHeight: "470px" }} className="  mt-5 col-md-7 d-flex mt-md-5  justify-content-center">
                        <a href="https://isaiasdesemvolvedor.github.io/calculadora/" className="fade ">  <img className="fade" style={{ maxHeight: "100%", width: "100%" }} src="https://i.ibb.co/PZJdrJ6T/Captura-de-tela-2025-02-14-223130.png" alt="" /></a>
                    </section>
                    <section className="   mt-5 col-md-5 d-flex flex-column justify-content-around align-items-center ">
                        <h1 style={{ color: "#6F848C" }} className="text-center mt-5 fade  "> calculator</h1>
                        <p style={{ color: "#6F848C" }} className=" text-center mt-5  fade ">Faça cálculos, resolva equações com essa arma poderosa científica. </p>
                        <div className="fade"> <img src="data:image/png;base64,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" alt="html-5" />
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEElEQVR4nO3YSUwUQRQA0J5qF4zx4JK4HEz04HrRg3G5aIxr4nJRb+pFOelBYaoaVDSgkcUVN0Qxbgfxoh5QYKp6RBQXkIjKMuAoiAziMKCCKCiU6THQXTgtM12lk5j5SSVkuqu7Hr+2LkmKRCQi8f8GQKQdIELDWiBusw6AxB12AMKvODKAH4YdAEmRZYAN4pu8DZDPNYRejlb21bchcsM6AOHMsAAOvdABEJ/lyUBSOAAgucyQAZxoGQAQ2R4WwIGnhjGAt1kHQLIhLIDEx3p9hay3DJCQY5FZw6alPqAtLS0DlmBizOVGFpHwoO89kl1daB0A86ebAcYm3hMC6KGUDjnfLwO7C3VAnHOadYDiGG0GGBKnUp+PH/Cxs/v3LhTn1AE7ckdZB0jUBhDuMkO88Xi5AbVtP1jA2XrDO3CX1gYOgH8mahA5iKdmNzGAMl8Xe8/pN4YZiLzjarwfAEmpSMD8W14GUODpZLvPCbex/lNugA3hXJGAVbk+BnCr9it7zzGXYRUmd/gBEF8SCdjsZMfFpeov7D2Hyw2rMLkoIgNpwTY21eEKeRAff9HOAlKeGzKAU7kBAJLYYAEJOZUhAxJLP7Nj4GCpcRaK4QcgsilYwM6bL0MGxD76xAKSivVn2slGboAM1eXBAqKvPw8ZsKWglQXse6iPH4Us4wZIyDFb5CC+WtPBANY5fOw9e+731ZVinbP4Afb8CSIBOW+/MoClOc1sBuLv6oD4gvH8gL3OQQCS7kCNm5nG7kgLqxoGBBS972QAc2580K9nvqNAUXsHcI8UXTKYH/BrJmoOBJh4oJABlLgbBwRUtH5nAFOym/TrGXXGGcgrpPF+ACIVgQAj995lALWNXro8s5hGxeu7yd7GDcvy0NW5Ptra2c0Axl3RvwXAqdf68yEpFwawQeIMBBhssqV+7fHSkwWv6OIzT+iK2830gusLbfnGNrw3orI8egbSq42rsCoOgHC22SCtb2q2vJ1u/97DdrEjhuMUSK6JA0CcbgY4olb/8bvALLSulFHRbxuRZjhOQfi4MABAZPefpkqtKy048Zgm57uoq77JFKB1oys1HXRtns8/JuT+X2IpzwxjAO8SB4Bka7DzvhFTVf+B+gZotGx2nILwFmEAGalrrSxi2nfz0CyLxyl2skYYQILOeaJWYtNypo7dRijqXHEAxTFZOEBbdU+6qZxS9uscSGHrSTF5k8QBYvKGCwFk1FH5aBUF+4spMCx2IEDR3ikJDS0Lihptg+Q6QPhz0Ij0GgqSn1E5Qe8egQvusEHiAApGUhyeIf3V2FE0TFYcS2yQJAOIS6xmB0Di1o7P/eef9vsjpLBF0Nn5l/9lnuxAvNK/ekNcoxXtb+037Zrl50YiEpH4P+Mn9Q+e3CSBSHQAAAAASUVORK5CYII=" alt="css3" />
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nGNgGAWjYBSMgkEJvt+X+z+YMMOoB+6PxsD/0SREChjoJPN9NBPfH/hQ/z5ajN4f+JD/PlqR3R8cmIFUMNAO/j7qgfsDH+rfR5PQfUpCjBGOl04VQZE7s1Pyf6gv939xUZb/LMyM/yXFWf5HBvD8P7tTcvB7YPtSsf8c7Ewo8gxQzMXJBJYftB74elfuv4IsK1ycnY3pv4YKG5iGiZkasP//dm+QeuDkNgm4GBMT4//TOyBJ5tZRqf9K8qz/cxL5/r++Kjt4Y2DXCnG4GCgZfbyFcOy769gdPqg8cPuYNIq4rxvX/5tHpIg0bxB4AIRd7ThR5DjYmf4nhvP+v7xfamh44N4J6f/62uwYJRAzMyPYI28Gcx6AYZAjy7L5//NwYRanOups/59fkBncHoDhp+dk/jeXCfwXE2FBUZ8VzzewHgCV9/g8gF7Ov7gkAy7/YeplJFno5wFQKeLjwvV/3VxRuNjVA1IoHliLJDe3T/i/kS47RnnfXSsIV8/GykQfDyyeLAKu/mGlSU4S3/+JzUL/LU04UDwAavuA1IPaPzAxe0vO/3eOS4PFn1+U+W9rjtADqq3p4oFL+6TgHsCFVRRY4Ummpx4RyiDMyMj4X0qCBaUpAcKlWfz0S0I7l4v95+Nhxup4UFLYugTROAN5pCJHAK+Hbcw4sBalNPMACD84Jf0/O4Hvv6wUK7g8BzWTAz25/x/fLIFV/aH1Ev/D/Xn+qylBGnIC/Mxgh09pE/r/+TauUo2GHqAHZhj1wP3RGPhP1yQ0CkbBKBgFDPQAANX6rlnxM/hBAAAAAElFTkSuQmCC" alt="javascript" />
                        </div>
                    </section>






                </div>

            </div>
        </>

    )
}

export default Projects
