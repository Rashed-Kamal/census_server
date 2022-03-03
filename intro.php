

<!---body formating starts from here-->

    <div id="intro">
        <p>Welcome to Census Data Input. We will collect:
            <ul>
                <li>personal deatails</li>
                <li>Dwelling information</li>
                <li>And lastly your experience about using the site</li>
            </ul>
        </p>
    <form action= '.' method="POST">
        <label>Lets start with - How many people spent the Census night at the dwelling?                        
        <input id="totalPerson" name="totalPerson" type="number" value="" min="1" max="100" ></label>
        <input type="hidden" name="action" value="numOfCustomer">
        <input id="start" type="submit" value="Start">
    </form>
        
    </div>
   