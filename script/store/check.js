
export const check = JSON.parse(localStorage.getItem('check')) || [];

export function store(){
  
  return localStorage.setItem('check',JSON.stringify(check));
}
