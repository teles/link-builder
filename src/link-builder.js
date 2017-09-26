function LinkBuilder(content, replacements){    
	  return replacements.map(replacement => {
      let counter = 0;
      let patternModifiers = replacement.insensitive ? "gi" : "g";
      let pattern = new RegExp(replacement.keyword, patternModifiers);        		
      return content.replace(pattern, (match) =>{                     
        let hasNoMax = typeof replacement.max === "undefined";
			  if(replacement.max > counter || hasNoMax) {
 				  counter++;
				  return `<a href="${replacement.anchor}">${match}</a>`;
			  }   
 			  return match;                 
      });        
    });
}
