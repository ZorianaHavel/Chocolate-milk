//svg
const logoSVG = (root) => {
 const svg=document.createElement('div');
 svg.className='svg';
 root.appendChild(svg);


    const svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElem.setAttribute('width', '96');
    svgElem.setAttribute('height', '94');
    svgElem.setAttribute('viewBox', '0 0 96 94');
    svgElem.setAttribute('fill', 'none');
    svgElem.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    //path1
    const path1 = document.createElement('path');
    path1.setAttribute('fill-rule', 'evenodd');
    path1.setAttribute('clip-rule', 'evenodd')
    path1.setAttribute('d', 'M81.2872 47.7764C81.2872 66.436 66.1606 81.5626 47.501 81.5626C28.8414 81.5626 13.7148 66.436 13.7148 47.7764C13.7148 29.1168 28.8414 13.9902 47.501 13.9902C66.1606 13.9902 81.2872 29.1168 81.2872 47.7764ZM47.501 79.5626C65.0561 79.5626 79.2872 65.3314 79.2872 47.7764C79.2872 30.2214 65.0561 15.9902 47.501 15.9902C29.946 15.9902 15.7148 30.2214 15.7148 47.7764C15.7148 65.3314 29.946 79.5626 47.501 79.5626Z');
    path1.setAttribute('fill', 'url(#paint0_linear_2935_4505');
    svgElem.appendChild(path1);
    //path2
    const path2 = document.createElement('path');
    path2.setAttribute('fill-rule', 'evenodd');
    path2.setAttribute('clip-rule', 'evenodd')
    path2.setAttribute('d', 'M43.5003 77.5629C61.0553 77.5629 75.2865 63.3317 75.2865 45.7767C75.2865 34.1214 69.0133 23.9313 59.6592 18.3984C71.1816 23.1725 79.2869 34.5279 79.2869 47.7764C79.2869 65.3314 65.0558 79.5625 47.5007 79.5625C41.601 79.5625 36.0767 77.9552 31.3418 75.1546C35.0872 76.7064 39.1937 77.5629 43.5003 77.5629Z');
    path2.setAttribute('fill', 'url(#paint1_linear_2935_4505');
    svgElem.appendChild(path2);
    //path3
    const path3 = document.createElement('path');
    path3.setAttribute('fill-rule', 'evenodd');
    path3.setAttribute('clip-rule', 'evenodd')
    path3.setAttribute('d', 'M10.5131 26.0289C13.7159 36.3789 20.3899 48.7622 29.7243 60.7929C39.0587 72.8237 49.3955 82.3651 58.6253 88.039C63.2335 90.8719 67.66 92.799 71.6147 93.5355C75.5668 94.2714 79.2881 93.8522 82.1366 91.6421C84.9851 89.432 86.3157 85.9316 86.5848 81.9205C86.854 77.9068 86.087 73.1404 84.4879 67.9728C81.285 57.6227 74.611 45.2395 65.2767 33.2087C55.9423 21.178 45.6055 11.6366 36.3757 5.96267C31.7675 3.12978 27.341 1.20261 23.3863 0.466207C19.4341 -0.26972 15.7129 0.149504 12.8644 2.35959C10.0159 4.56968 8.68528 8.07007 8.41621 12.0811C8.14696 16.0948 8.91395 20.8613 10.5131 26.0289ZM31.3045 59.5669C12.8526 35.785 5.1456 10.8798 14.0904 3.93975C23.0352 -3.00032 45.2446 10.6527 63.6965 34.4347C82.1484 58.2167 89.8554 83.1218 80.9106 90.0619C71.9657 97.002 49.7563 83.3489 31.3045 59.5669Z');
    path3.setAttribute('fill', 'url(#paint2_linear_2935_4505)');
    svgElem.appendChild(path3);
    //path4
    const path4 = document.createElement('path');
    path4.setAttribute('fill-rule', 'evenodd');
    path4.setAttribute('clip-rule', 'evenodd')
    path4.setAttribute('d', 'M89.0654 35.19C83.5876 44.709 74.2613 55.4066 62.438 65.1422C50.6148 74.8778 38.3266 81.9784 27.9334 85.5281C22.7478 87.2991 17.8768 88.2406 13.6911 88.0815C9.50936 87.9227 5.64875 86.6359 3.11066 83.5536C0.572565 80.4712 0.0504301 76.4355 0.696854 72.3009C1.34389 68.1624 3.20242 63.5626 5.93551 58.8132C11.4133 49.2942 20.7397 38.5966 32.5629 28.861C44.3861 19.1253 56.6744 12.0248 67.0676 8.47512C72.2531 6.70406 77.1241 5.76261 81.3098 5.92163C85.4916 6.0805 89.3522 7.36727 91.8903 10.4496C94.4284 13.5319 94.9505 17.5677 94.3041 21.7023C93.6571 25.8407 91.7985 30.4406 89.0654 35.19ZM60.5311 62.8263C83.7678 43.6924 96.771 21.0964 89.5744 12.3566C82.3778 3.61684 57.7067 12.043 34.4699 31.1769C11.2331 50.3108 -1.77003 72.9068 5.42656 81.6466C12.6232 90.3863 37.2943 81.9602 60.5311 62.8263Z');
    path4.setAttribute('fill', 'url(#paint3_linear_2935_4505)');
    svgElem.appendChild(path4);
    //path11
    const path11 = document.createElement('path');
    path11.setAttribute('d', 'M95.1013 25.9935C95.1013 28.102 93.392 29.8113 91.2836 29.8113C89.1751 29.8113 87.4658 28.102 87.4658 25.9935C87.4658 23.885 89.1751 22.1758 91.2836 22.1758C93.392 22.1758 95.1013 23.885 95.1013 25.9935Z');
    path11.setAttribute('fill', '#FF6915');
    svgElem.appendChild(path11);
    //path12
    const path12 = document.createElement('path');
    path12.setAttribute('d', 'M39.0701 29.8119C39.0701 31.9204 37.3608 33.6296 35.2523 33.6296C33.1438 33.6296 31.4346 31.9204 31.4346 29.8119C31.4346 27.7034 33.1438 25.9941 35.2523 25.9941C37.3608 25.9941 39.0701 27.7034 39.0701 29.8119Z');
    path12.setAttribute('fill', '#FF6915');
    svgElem.appendChild(path12);
    //path13
    const path13 = document.createElement('path');
    path13.setAttribute('d', 'M38.4532 80.2837C38.4532 83.5395 35.8139 86.1788 32.5581 86.1788C29.3024 86.1788 26.6631 83.5395 26.6631 80.2837C26.6631 77.028 29.3024 74.3887 32.5581 74.3887C35.8139 74.3887 38.4532 77.028 38.4532 80.2837Z');
    path13.setAttribute('fill', '#FF6915');
    svgElem.appendChild(path12);
    //defs
    const defs = document.createElement('defs');
    svgElem.appendChild(defs);
    //linearGradient1
    const linearGradient = document.createElement('linearGradient');
    linearGradient.setAttribute('id', 'paint0_linear_2935_4505');
    linearGradient.setAttribute('x1', '47.5017');
    linearGradient.setAttribute('y1', '66.3588');
    linearGradient.setAttribute('x2', '47.4993');
    linearGradient.setAttribute('y2', '0.475761');
    linearGradient.setAttribute('gradientUnits', 'userSpaceOnUse');
    defs.appendChild(linearGradient);
    //stop11
    const stop11 = document.createElement('stop');
    stop11.setAttribute('stop-color', '#EF37FF');
    linearGradient.appendChild(stop11);
    //stop12
    const stop12 = document.createElement('stop');
    stop12.setAttribute('offset', '1');
    stop12.setAttribute('stop-color', '#9E26FF');
    linearGradient.appendChild(stop12);
    //linearGradient2
    const linearGradient2 = document.createElement('linearGradient');
    linearGradient2.setAttribute('id', 'paint1_linear_2935_4505');
    linearGradient2.setAttribute('x1', '55.3148');
    linearGradient2.setAttribute('y1', '65.8006');
    linearGradient2.setAttribute('x2', '55.3121');
    linearGradient2.setAttribute('y2', '6.16562');
    linearGradient2.setAttribute('gradientUnits', 'userSpaceOnUse');
    defs.appendChild(linearGradient2);
    //stop21
    const stop21 = document.createElement('stop');
    stop21.setAttribute('stop-color', '#FF6915');
    linearGradient2.appendChild(stop21);
    //stop22
    const stop22 = document.createElement('stop');
    stop22.setAttribute('offset', '1');
    stop22.setAttribute('stop-color', '#9E26FF');
    linearGradient2.appendChild(stop22);
    ////linearGradient3
    const linearGradient3 = document.createElement('linearGradient');
    linearGradient3.setAttribute('id', 'paint2_linear_2935_4505');
    linearGradient3.setAttribute('x1', '47.5012');
    linearGradient3.setAttribute('y1', '72.7782');
    linearGradient3.setAttribute('x2', '47.4973');
    linearGradient3.setAttribute('y2', '-18.6144');
    linearGradient3.setAttribute('gradientUnits', 'userSpaceOnUse');
    defs.appendChild(linearGradient3);
    //stop31
    const stop31 = document.createElement('stop');
    stop31.setAttribute('stop-color', '#EF37FF');
    linearGradient3.appendChild(stop31);
    //stop32
    const stop32 = document.createElement('stop');
    stop32.setAttribute('offset', '1');
    stop32.setAttribute('stop-color', '#9E26FF');
    linearGradient3.appendChild(stop32);
    //linearGradient4
    const linearGradient4 = document.createElement('linearGradient');
    linearGradient4.setAttribute('id', 'paint3_linear_2935_4505');
    linearGradient4.setAttribute('x1', '47.5014');
    linearGradient4.setAttribute('y1', '69.6051');
    linearGradient4.setAttribute('x2', '47.4988');
    linearGradient4.setAttribute('y2', '-10.5346');
    linearGradient4.setAttribute('gradientUnits', 'userSpaceOnUse');
    defs.appendChild(linearGradient4);
    //stop41
    const stop41 = document.createElement('stop');
    stop41.setAttribute('stop-color', '#EF37FF');
    linearGradient4.appendChild(stop41);
    //stop42
    const stop42 = document.createElement('stop');
    stop42.setAttribute('offset', '1');
    stop42.setAttribute('stop-color', '#9E26FF');
    linearGradient4.appendChild(stop42);

    svg.appendChild(svgElem);
}

