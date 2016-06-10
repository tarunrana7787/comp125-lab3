/**
 * FileName: app.js
 * 
 * @author Tarun Rana
 * @date June 10, 2016
 * 
 * StudentID: 300871205
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    /**
     * This function uses the document.title to switch javascript function 
     * when the page switches
     * 
     * @function PageSwitcher
     * @returns {void}
     */
    function PageSwitcher() {
        switch (document.title) {
            case "Home":
                indexx();
                break;
            case "About Me":
                bio();
                break;
            case "Contact Me":
                contactUs();
                break;
            case "Projects":
                projectss();
                break;
        }
    }
    
    /**
     * This function injects some text into the first paragraph of a page based on it's 
     * document.title property
     * 
     * @function InitialText
     * @returns {void}
     */
    function InitialText() {
        var paragraph = document.getElementsByTagName("p")[0];
        
        paragraph.textContent = "The Document Object Model (DOM) is a cross-platform and language-independent convention for representing and interacting with objects in HTML, XHTML, and XML documents. The nodes of every document are organized in a tree structure, called the DOM tree. " + document.title + "The history of the Document Object Model is intertwined with the history of the browser wars of the late 1990s between Netscape Navigator and Microsoft Internet Explorer, as well as with that of JavaScript and JScript, the first scripting languages to be widely"  +"implemented in the layout engines of web browsers.";
    }
    
    /**
     * This function provides JavaScript code for the Home page
     * 
     * @function Home
     * @returns {void}
     */
    function Home() {
        InitialText();
        
        var firstPargraph = document.querySelectorAll("div.row p")[0];
        
       firstPargraph.style.color = "indigo";
    }
    
     /**
     * This function provides JavaScript code for the About page
     * 
     * @function About
     * @returns {void}
     */
    function bio() {
        InitialText();
    }
    
     /**
     * This function provides JavaScript code for the Contact page
     * 
     * @function Contact
     * @returns {void}
     */
    function contactUs() {
        
    }
    
     /**
     * This function provides JavaScript code for the Projects page
     * 
     * @function Projects
     * @returns {void}
     */
    function projectss() {
        InitialText();
    }

    
    window.addEventListener("load", PageSwitcher);
    
})();