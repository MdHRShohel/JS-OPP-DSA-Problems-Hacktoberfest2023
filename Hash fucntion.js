delete (key) {
   const index = this._setKey(key);
   if (this.table[index]) {
       this.table[index] = [];
       this.size--;
       return true;
   } else {
       return false;
   }
}
