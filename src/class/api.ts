export class Api {
    private token: string ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTAzMjQ1NDUzMSwiY29ycmVvIjoibWxyaDI2QGhvdG1haWwuY29tIiwiaWF0IjoxNjgxODI1NjY0LCJleHAiOjE2ODI0MzA0NjR9.41E8OhSlDagldUpUqzMgN5Ykp3czXqnHQlbHxOijw3s";
    static getAll() {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', 'https://apiestudiantes.maosystems.dev/api', true);
            request.onload = () => {
                if (request.status >= 200 && request.status < 400) {
                    resolve(JSON.parse(request.responseText));
                    } else {
                        reject(request.responseText);
                        }
                        };
                        request.onerror = () => {
                            reject(request.responseText);
                            };
                            request.send();
                            });
                            }
}